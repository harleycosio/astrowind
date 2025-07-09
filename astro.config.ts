import mdx from "@astrojs/mdx";
import partytown from "@astrojs/partytown";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import type { AstroIntegration } from "astro";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import icon from "astro-icon";
import path from "path";
import { fileURLToPath } from "url";
import {
	lazyImagesRehypePlugin,
	readingTimeRemarkPlugin,
	responsiveTablesRehypePlugin,
} from "./src/utils/frontmatter";
import astrowind from "./vendor/integration";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const hasExternalScripts = false;
const whenExternalScripts = (
	items: (() => AstroIntegration) | (() => AstroIntegration)[] = [],
) =>
	hasExternalScripts
		? Array.isArray(items)
			? items.map((item) => item())
			: [items()]
		: [];

export default defineConfig({
	output: "static",

	integrations: [
		tailwind({
			applyBaseStyles: false,
			
		}),
		sitemap(),
		mdx(),
		icon({
			include: {
				tabler: ["*"],
				"flat-color-icons": [
					"template",
					"gallery",
					"approval",
					"document",
					"advertising",
					"currency-exchange",
					"voice-presentation",
					"business-contact",
					"database",
				],
			},
		}),

		...whenExternalScripts(() =>
			partytown({
				config: { forward: ["dataLayer.push"] },
			}),
		),

		compress({
			CSS: true,
			HTML: {
				"html-minifier-terser": {
					removeAttributeQuotes: false,
				},
			},
			Image: false,
			JavaScript: true,
			SVG: false,
			Logger: 1,
		}),

		astrowind({
			config: "./src/config.yaml",
		}),
	],

	image: {
		domains: ["res.cloudinary.com"],
	},

	markdown: {
		remarkPlugins: [readingTimeRemarkPlugin],
		rehypePlugins: [
			[lazyImagesRehypePlugin, { 
			  loading: "lazy",       // Lazy-load non-critical images
			  decoding: "async",     // Async decoding
			  rootMargin: "200px",   // Start loading earlier
			}],
			responsiveTablesRehypePlugin,
		  ],
	},

	vite: {
		resolve: {
			alias: {
				"~": path.resolve(__dirname, "./src"),
			},
		},
	},
});
