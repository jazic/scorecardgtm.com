import handler, { createScheduledHandler, PluginBridge } from "@emdash-cms/cloudflare/worker";

export { PluginBridge };

export default {
	...handler,
	// www.scorecardgtm.com → scorecardgtm.com (both are custom domains on this Worker).
	fetch(request, env, ctx) {
		const url = new URL(request.url);
		if (url.hostname === "www.scorecardgtm.com") {
			url.hostname = "scorecardgtm.com";
			return Response.redirect(url.toString(), 301);
		}
		return handler.fetch!(request, env, ctx);
	},
	scheduled: createScheduledHandler(),
} satisfies ExportedHandler;
