export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'comic',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/css/main.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/stylelint
    '@nuxtjs/stylelint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    },
  },
  env: {
    BASE_URL: process.env.BASE_URL || 'http://localhost:3000',
    API_URL: process.env.API_URL || 'https://beta-api.waka.vn',
    CDN_URL: process.env.CDN_URL || 'https://1123e14a0.vws.vegacdn.vn/view/v2/image/img.book_fm',
    VERSION: process.env.VERSION || '1.0.0',
    KEY_FM_PLAYER: process.env.KEY_FM_PLAYER,
    IS_DEV: process.env.IS_DEV || 0,
    PAYMENT_URL: process.env.PAYMENT_URL || 'https://alpha.waka.vn'
  },
  auth: {
    plugins: [
      '~/plugins/mixins.js',
      '~/plugins/components.js',
    ]
  }
}
