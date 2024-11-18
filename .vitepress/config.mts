import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BLOG",
  description: "个人博客",
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
          { text: '事件循环', link: '/Javascript/事件循环' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/rookie-ysj' }
    ]
  }
})
