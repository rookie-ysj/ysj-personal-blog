import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BLOG",
  description: "个人博客",
  base: '/ysj-personal-blog/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Blog', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'JavaScript',
        items: [
          { text: 'Event-loop', link: '/Event-loop' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rookie-ysj' }
    ]
  }
})
