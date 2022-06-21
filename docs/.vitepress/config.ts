import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'en-US',
  title: 'vuse-gesture',
  description: 'Bread n butter utility for component-tied mouse/touch gestures in Vue.',
  lastUpdated: true,

  themeConfig: {
    socialLinks: [
      { icon: 'github', link: 'https://github.com/wobsoriano/vuse-gesture' },
    ],
    // repo: 'wobsoriano/lexical-vue',
    // docsDir: 'docs',
    // editLinks: true,
    // editLinkText: 'Edit this page on GitHub',
    lastUpdatedText: 'Last Updated',
    // nav: [
    //   { text: 'Guide', link: '/', activeMatch: '^/$|^/guide/' },
    //   { text: 'Playground', link: 'https://lexical-vue-playground.vercel.app' },
    // ],
    footer: {
      message: 'Released under the MIT License.',
    },
  },
})
