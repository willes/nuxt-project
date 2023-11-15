// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/tailwindcss','@element-plus/nuxt'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    
  head: {
    title: '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1,user-scalable=0' },
      { name: 'referrer', content: 'no-referrer' },
      { hid: 'description', name: 'description', content: '' },
      //在此处添加
      { name: 'referrer', content: 'no-referrer' },
    ]
  },
  routeRules: {
    // 为了SEO目的，在构建时生成
    '/': { prerender: true },
    // 缓存1小时
    '/api/*': { cache: { maxAge: 60 * 60 } }
  }
  },
  // nitro: {
  //   devProxy: {
  //     "/api": {
  //       target: "https://www.xinpianchang.com/", // 这里是接口地址
  //       changeOrigin: true,
  //       prependPath: true,
  //     },
  //   },
  //   routeRules: {
  //     '/api/**': {
  //       proxy: 'https://www.xinpianchang.com/*'
  //     }
  //   }
  // },
  // vite: {
  //   server: {
  //     proxy: {
  //       "/api": {
  //         target: 'https://www.xinpianchang.com/',
  //         changeOrigin: true,
  //         rewrite: (path) => path.replace(/^\/api/, ""),
  //       },
  //     },
  //   },
  // }
  //   axios: {
//     proxy: true, // 表示开启代理
//     prefix: '/api', // 表示给请求url加个前缀 /api
//     credentials: true // 表示跨域请求时是否需要使用凭证
// },
// proxy: {
//   '/api': {
//     target: 'https://www.xinpianchang.com/', // 目标接口域名
//     changeOrigin: true, // 表示是否跨域
//     pathRewrite: {
//       '^/api': '/', // 把 /api 替换成 /
//     }
//   }
// }
})