const { createClient } = require('contentful')
const pkg = require('./package')

require('dotenv').config()

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

module.exports = {
  mode: 'universal',

  generate: {
    routes: function() {
      return client
        .getEntries({
          content_type: 'category'
        })
        .then(entries => {
          return [...entries.items.map(entry => `/blog/${entry.fields.slug}`)]
        })
    }
  },

  env: {
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: ['~/assets/styles/reset.css', '~/assets/styles/application.styl'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: ['~/plugins/contentful.js'],

  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/markdownit', '@nuxtjs/style-resources'],

  styleResources: {
    stylus: ['~assets/styles/variables.styl']
  },

  markdownit: {
    injected: true,
    breaks: true,
    html: true,
    linkify: true,
    typography: true
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
