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
	// Old GitHub Pages URLs (website/*.html), which aren't shipped any more.
	redirects: {
		"/eta-search.html": { status: 301, destination: "/acquisition-search" },
		"/eta-search": { status: 301, destination: "/acquisition-search" },
		"/private-equity.html": { status: 301, destination: "/acquisition-search" },
		"/private-equity": { status: 301, destination: "/acquisition-search" },
		"/sales-leaders.html": { status: 301, destination: "/sales-teams" },
		"/sales-leaders": { status: 301, destination: "/sales-teams" },
		"/ceos-founders.html": { status: 301, destination: "/founders" },
		"/ceos-founders": { status: 301, destination: "/founders" },
		"/how-scorecard-works.html": { status: 301, destination: "/#how" },
		"/how-scorecard-works": { status: 301, destination: "/#how" },
		"/account-scoring.html": { status: 301, destination: "/" },
		"/account-scoring": { status: 301, destination: "/" },
		"/eta-search-wireframe.html": { status: 301, destination: "/acquisition-search" },
		"/eta-search-wireframe": { status: 301, destination: "/acquisition-search" },
		"/fractional-outbound.html": { status: 301, destination: "/" },
		"/fractional-outbound": { status: 301, destination: "/" },
		"/growth-strategy.html": { status: 301, destination: "/" },
		"/growth-strategy": { status: 301, destination: "/" },
		"/solutions-coming-soon.html": { status: 301, destination: "/" },
		"/solutions-coming-soon": { status: 301, destination: "/" },
		"/what-we-do-coming-soon.html": { status: 301, destination: "/" },
		"/what-we-do-coming-soon": { status: 301, destination: "/" },
		"/index.html": { status: 301, destination: "/" },
	},
	devToolbar: { enabled: false },
	// Dev server via `tailscale serve` (https://<machine>.<tailnet>.ts.net).
	vite: { server: { allowedHosts: [".ts.net"] } },
});
