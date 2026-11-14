import cloudflare from "@astrojs/cloudflare";
import react from "@astrojs/react";
import { d1, r2 } from "@emdash-cms/cloudflare";
import { cloudflareEmail } from "@emdash-cms/cloudflare/plugins";
import { defineConfig } from "astro/config";
import emdash from "emdash/astro";
import { forms } from "./src/plugins/forms.ts";

export default defineConfig({
	output: "server",
	adapter: cloudflare(),
	image: {
		layout: "constrained",
		responsiveStyles: true,
	},
	integrations: [
		react(),
		emdash({
			database: d1({ binding: "DB", session: "auto", coalesce: true }),
			storage: r2({ binding: "MEDIA" }),
			// CMS mail (form notifications, sign-in links, invites) via Cloudflare Email Sending.
			// The sender's domain must be onboarded in Cloudflare Email Sending before production sends work.
			plugins: [
				cloudflareEmail({ from: { email: "notifications@scorecardgtm.com", name: "Scorecard" }, replyTo: "hello@scorecardgtm.com" }),
				// Contact and challenge forms: save to Form submissions, email the team.
				forms({ notifyTo: "hello@scorecardgtm.com" }),
			],
		}),
	],
	devToolbar: { enabled: false },
	// Dev server via `tailscale serve` (https://<machine>.<tailnet>.ts.net).
	vite: { server: { allowedHosts: [".ts.net"] } },
});
