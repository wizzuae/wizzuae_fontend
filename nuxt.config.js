export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ' + 'Your business begins here !',
    title: 'Wizz' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Our constant commitment is to pursue excellence in providing quality solutions that prepare your business for the future through sustained and long-term engagement.' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Our constant commitment is to pursue excellence in providing quality solutions that prepare your business for the future through sustained and long-term engagement.' },
      { hid: 'og:title', name: 'og:title', content: 'Wizz - Your business begins here !' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Wizz - Your business begins here !' },
      { hid: 'og:description', name: 'og:description', content: 'Our constant commitment is to pursue excellence in providing quality solutions that prepare your business for the future through sustained and long-term engagement.' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [

      {
        hid: "tawk.to",
        src: "https://embed.tawk.to/60421191385de407571cdd87/1f01198g9",
        defer: true

      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-gtag', }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    // 'nuxt-vite',
    'nuxt-windicss'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa', '@nuxtjs/markdownit', '@nuxtjs/axios', '@nuxtjs/sitemap',
  ],

  axios: {
    baseURL: process.env.API_URL // Used as fallback if no runtime config is provided
  },
  // This is for displaying rich text content in the frontend.
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true
  },

  env: {
    ASSET_URL: process.env.ASSET_URL,
    API_URL: process.env.API_URL,
    FORM_ACTION_API: process.env.FORM_ACTION_API
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  generate: {
    fallback: true
  }
}
