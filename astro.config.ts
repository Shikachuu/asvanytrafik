import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import react from "@astrojs/react"

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  site: "https://asvanytrafik.hu",
  integrations: [
    mdx(),
    sitemap(),
    react(),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    })
  ]
})