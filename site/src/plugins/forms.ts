import { definePlugin, pluginResponse, type PluginDescriptor } from "emdash";

// Contact and challenge forms post to /_emdash/api/plugins/forms/submit. Each submission is saved as a
// draft in the `submissions` collection (Admin → Form submissions; drafts never reach the public API)
// and emailed to `notifyTo` through the site's email provider (Cloudflare Email Sending in production,
// the console in dev). Then it redirects back to the form page with ?sent=1 or ?error=…, so the forms
// work without JavaScript.
// ponytail: honeypot only, add Turnstile if spam gets through.

interface Options { notifyTo: string }

const FORMS = {
	contact: { required: ["name", "email", "message"], page: "/contact" },
	challenge: { required: ["name", "email", "search", "geography", "fit"], page: "/challenge" },
} as const;
const LABELS = { name: "Name", email: "Email", company: "Company", message: "Message", search: "Search", geography: "Geography", fit: "Great fit" };
const FIELDS = Object.keys(LABELS) as (keyof typeof LABELS)[];

const redirect = (location: string) => pluginResponse({ status: 303, headers: { location }, body: { kind: "text", value: "" } });

export function createPlugin({ notifyTo }: Options) {
	return definePlugin({
		id: "forms",
		version: "1.0.0",
		capabilities: ["content:write", "email:send"],
		routes: {
			submit: {
				public: true,
				methods: ["POST"],
				request: { body: "form-data", maxBytes: 64 * 1024 },
				response: "raw",
				handler: async (ctx: any) => {
					const input = new Map<string, string>();
					for (const e of (ctx.input as { entries: { name: string; kind: string; value?: string }[] }).entries)
						if (e.kind === "text") input.set(e.name, (e.value ?? "").trim().slice(0, 5000));

					const kind = input.get("kind") as keyof typeof FORMS;
					const form = FORMS[kind];
					if (!form) return pluginResponse({ status: 400, body: { kind: "text", value: "Unknown form" } });
					const back = (state: string) => redirect(`${form.page}?${state}#form`);
					// Bots fill the hidden field; pretend it worked.
					if (input.get("website")) return back("sent=1");

					const data = Object.fromEntries(FIELDS.map((f) => [f, input.get(f) ?? ""]));
					if (form.required.some((f) => !data[f]) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return back("error=invalid");

					const title = `${kind === "challenge" ? "Challenge" : "Contact"}: ${data.name}${data.company ? ` (${data.company})` : ""}`;
					try {
						await ctx.content.create("submissions", { title, kind, ...data });
					} catch (err) {
						ctx.log.error("save failed", { err: String(err) });
						return back("error=save");
					}

					// The record is saved; a failed notification shouldn't fail the visitor.
					try {
						const body = FIELDS.filter((f) => data[f]).map((f) => `${LABELS[f]}:\n${data[f]}`).join("\n\n");
						await ctx.email?.send({ to: notifyTo, replyTo: data.email, subject: `New ${kind} submission: ${data.name}`, text: `${body}\n\nSaved in the CMS under Form submissions.` });
						if (!ctx.email) ctx.log.warn("no email provider active; notification skipped");
					} catch (err) {
						ctx.log.error("notification failed", { err: String(err) });
					}
					return back("sent=1");
				},
			},
		},
	});
}

export function forms(options: Options): PluginDescriptor<Options> {
	return { id: "forms", version: "1.0.0", entrypoint: new URL(import.meta.url).pathname, format: "native", options, capabilities: ["content:write", "email:send"] };
}
