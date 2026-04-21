/** @format */

// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import { fileURLToPath, URL } from "node:url";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
	site: "https://pavimentosurbanos.cl",
	vite: {
		plugins: [tailwindcss()],
		resolve: {
			alias: {
				"@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
				"@components": fileURLToPath(new URL("./src/components", import.meta.url)),
				"@data": fileURLToPath(new URL("./src/data", import.meta.url)),
				"@icons": fileURLToPath(new URL("./src/assets/icons", import.meta.url)),
				"@images": fileURLToPath(new URL("./src/assets/images", import.meta.url)),
				"@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
			},
		},
	},

	integrations: [icon({ iconDir: "src/assets/icons" }), mdx()],
});
