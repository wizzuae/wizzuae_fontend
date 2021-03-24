export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'wizz-uae-fontend',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
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
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    'nuxt-windicss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa', '@nuxtjs/strapi', '@nuxtjs/markdownit', '@nuxtjs/apollo'
  ],
  // This is for displaying rich text content in the frontend.
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true
  },

  strapi: {
    // Options
  },
  apollo: {
    // Tutorial Title: Leveraging the Power of GraphQL and NuxtJS
    // Tutorial Link: https://labs.thisdot.co/blog/leveraging-the-power-of-graphql-and-nuxtjs
    tokenName: "nuxt-apollo", // specify token name
    cookieAttributes: {
      expires: 7 // optional, default: 7 (days)
    },
    defaultOptions: {
      $query: {
        fetchPolicy: "network-only",
        errorPolicy: "all"
      }
    },
    watchLoading: "@/apollo/loadingHandler.js",
    errorHandler: "@/apollo/errorHandler.js",
    clientConfigs: {
      default: {
        httpEndpoint: 'http://localhost:8055/graphql',
      }
    }
  },
  env: {
    strapiBaseUri: "https://www.wizzuae.ae/",
    ASSET_URL: process.env.ASSET_URL
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
