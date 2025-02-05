import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Momoc's Blog",
  description: "My personal blog",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '文档', link: '/markdown-examples' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'One more thing',
        items: [
          { text: '和双下巴Say Goodbye', link: '/pages/和双下巴Say Goodbye' },
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      },
      {
        text: '技术文档',
        items: [
          { text: '哈希算法的精简运用', link: '/pages/哈希算法的精简运用' },
          { text: '浅谈前端Web性能优化', link: '/pages/浅谈前端Web性能优化' },
          { text: 'ES6常用数组操作及技巧汇总', link: '/pages/ES6常用数组操作及技巧汇总' },
          { text: 'Express知识点摘抄', link: '/pages/Express知识点摘抄' },
          { text: 'JavaScript知识点整理', link: '/pages/JavaScript知识点整理' },
          { text: 'JavaScript通用脱敏方法', link: '/pages/JavaScript通用脱敏方法' },
          { text: 'JavaScript闭包浅谈', link: '/pages/JavaScript闭包浅谈' },
          { text: 'Promise对象详解', link: '/pages/Promise对象详解' },
          { text: '你必须掌握的HTTP与HTTPS的那些事儿', link: '/pages/你必须掌握的HTTP与HTTPS的那些事儿' },
          { text: '使用nvm优雅管理多版本Node', link: '/pages/使用nvm优雅管理多版本Node' },
          { text: '在JavaScript中将String与XML相互转换', link: '/pages/在JavaScript中将String与XML相互转换' },
          { text: '如何用Js将数组分割成每N个为一组', link: '/pages/如何用Js将数组分割成每N个为一组' },
          { text: '浅谈JS防抖和节流', link: '/pages/浅谈JS防抖和节流' },
          { text: '浅谈前端Web性能优化', link: '/pages/浅谈前端Web性能优化' },
          { text: '纯原生JavaScript封装AJAX请求', link: '/pages/纯原生JavaScript封装AJAX请求' },
          { text: '还在用Ajax？不如试试Fetch', link: '/pages/还在用Ajax？不如试试Fetch' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Skyrim-Tom/Momoc-Blog' }
    ],

    footer: {
      message: '<a href="https://beian.miit.gov.cn">粤ICP备2025366790号</a> 🚀 Released under the MIT License.',
      copyright: 'Copyright © 2025-present Momoc'
    }
  },
  lastUpdated: true
})
