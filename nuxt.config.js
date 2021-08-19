export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s - ' + 'Leading business setup and company formation service provider in the UAE',
    title: 'Wizz' || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Start business in UAE with premium business setup services. WIZZ offers best company formation, Mainland/Freezone license, visa processing, and PRO packages' },
      { hid: 'apple-mobile-web-app-title', name: 'apple-mobile-web-app-title', content: 'Start business in UAE with premium business setup services. WIZZ offers best company formation, Mainland/Freezone license, visa processing, and PRO packages' },

      // Twitter
      // Test on: https://cards-dev.twitter.com/validator
      {
        hid: 'twitter:card',
        name: 'twitter:card',
        content: 'summary_large_image'
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@wizzuae' },
      {
        hid: 'twitter:url',
        name: 'twitter:url',
        content: 'https://www.wizzuae.ae'
      },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Wizz - Leading business setup and company formation service provider in the UAE'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content:
          'Start business in UAE with premium business setup services. WIZZ offers best company formation, Mainland/Freezone license, visa processing, and PRO packages'
      },
      {
        hid: 'twitter:image',
        name: 'twitter:image',
        content: 'https://www.wizzuae.ae/icon.png'
      },

      // Open Graph
      // Test on: https://developers.facebook.com/tools/debug/

      { hid: 'og:site_name', property: 'og:site_name', content: 'Wizz' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://www.wizzuae.ae'
      },
      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Wizz - Leading business setup and company formation service provider in the UAE'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content:
          'Start business in UAE with premium business setup services. WIZZ offers best company formation, Mainland/Freezone license, visa processing, and PRO packages'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://www.wizzuae.ae/icon.png'
      },
      {
        hid: 'og:image:secure_url',
        property: 'og:image:secure_url',
        content: 'https://www.wizzuae.ae/icon.png'
      },
      {
        hid: 'og:image:alt',
        property: 'og:image:alt',
        content: 'Wizz'
      }

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
  css: ["~/assets/main.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: '~/plugins/vue-gtag', }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [

    // https://go.nuxtjs.dev/tailwindcss
    // 'nuxt-vite',
    'nuxt-windicss',
    // https://composition-api.nuxtjs.org/getting-started/setup#quick-start
    '@nuxtjs/composition-api/module',
    ['pinia/nuxt', { disableVuex: true }],
    '@nuxt/image',
    'nuxt-use-motion',
  ],

  image: {
    domains: ['https://wizzuae.s3.us-west-000.backblazeb2.com'] //whitelist 
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa', '@nuxtjs/markdownit', '@nuxtjs/robots', '@nuxtjs/axios', '@nuxtjs/sitemap',  //'nuxt-facebook-pixel-module',
  ],
  motions: {
    directives: {
      'pop-bottom': {
        initial: {
          scale: 0,
          opacity: 0,
          y: 100
        },
        visible: {
          scale: 1,
          opacity: 1,
          y: 0
        },
      }
    }
  },
  sitemap: {
    hostname: 'https://www.wizzuae.ae',
  },
  robots: {
    Sitemap: 'https://www.wizzuae.ae/sitemap.xml',
    UserAgent: '*',
  },
  facebook: {
    /* module options */
    // track: 'PageView',
    // pixelId: '436707010964698',
    // autoPageView: true,
    // disabled: false
  },
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
    fallback: true,
    interval: 2000,
  }
}
