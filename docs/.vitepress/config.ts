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
    lastUpdatedText: 'Last Updated',
    nav: nav(),
    sidebar: {
      '/docs/': sidebarDocs(),
    },
    footer: {
      message: 'Released under the MIT License.',
    },
  },
})

function nav() {
  return [
    { text: 'Docs', link: '/docs/introduction', activeMatch: '/docs/' },
    // { text: 'Configs', link: '/config/introduction', activeMatch: '/config/' },
    // {
    //   text: 'Changelog',
    //   link: 'https://github.com/vuejs/vitepress/blob/main/CHANGELOG.md'
    // }
  ]
}

function sidebarDocs() {
  return [
    {
      text: 'About',
      collapsible: true,
      items: [
        { text: 'Introduction', link: '/docs/introduction' },
        { text: 'Motivation', link: '/docs/motivation' },
      ],
    },
    {
      text: 'Reference',
      collapsible: true,
      items: [
        { text: 'Gestures', link: '/docs/gestures' },
        { text: 'Gesture options', link: '/docs/gesture-options' },
        { text: 'Gesture state', link: '/docs/gesture-state' },
        { text: 'Utilities', link: '/docs/utilities' },
      ],
    },
  ]
}
