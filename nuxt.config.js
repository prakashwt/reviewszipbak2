export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  meta: {
    ogType: 'website',
    ogImage: '/VREVIEWSLINK-SHARE-IMAGE.jpg',
    // ogUrl: false,
    ogTitle: 'Reviews Zip - Review Link Generator',
    ogDescription:
      'Combine multiple review links into 1 review link that you can host on your domain or ours.',
    ogSiteName: 'Reviews Zip - reviewszip.com',
    theme_color: '#111827',
    author: 'Jeff BAER',
    lang: 'en',
    name: 'Reviews Zip - A product of GET BAER '
  },
  head: {
    // title: 'Reviews Zip - A product of GET BAER (ZIA PLACEHOLDER)',
    title: 'Reviews Zip',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Combine multiple review links into 1 review link that you can host on your domain or ours.'
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        property: 'msapplication-TileColor',
        content: '#111827'
      },
      {
        hid: 'msapplication-TileImage',
        name: 'msapplication-TileImage',
        property: 'msapplication-TileImage',
        content: '/favi.png'
      }
    ],
    link: [
      // {
      //   rel: 'icon',
      //   type: 'image/x-icon',
      //   href: '/favicon.ico?v=2'
      // },
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favi.png'
      },
      // {
      //   rel: 'icon',
      //   type: 'image/png',
      //   href: '/favicon-32x32.png'
      // },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/apple-touch-icon.png'
      },
      {
        rel: 'mask-icon',
        color: '#111827',
        href: '/safari-pinned-tab.svg'
      }
    ],
    script: [{ src: '/qrcode.min.js' }]
  },
  manifest: {
    name: 'Reviews Zip - A product of GET BAER',
    short_name: 'Reviews Zip',
    start_url: '/',
    display: 'standalone',
    theme_color: '#111827',
    background_color: '#111827',
    display: 'standalone',
    icons: [
      {
        src: '/favi.png',
        type: 'image/png'
      }
    ]
  },
  loading: false,
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@aceforth/nuxt-optimized-images'
  ],
  optimizedImages: {
    inlineImageLimit: 1000,
    imagesName: ({ isDev }) =>
      isDev
        ? '[path][name][hash:optimized].[ext]'
        : 'img/[contenthash:7].[ext]',
    responsiveImagesName: ({ isDev }) =>
      isDev
        ? '[path][name]--[width][hash:optimized].[ext]'
        : 'img/[contenthash:7]-[width].[ext]',
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: true,
    optimizeImagesInDev: true,
    defaultImageLoader: 'img-loader',
    svgo: {
      // enable/disable svgo plugins here
    }
  },
  /*
   ** Nuxt.js modules
   */
  modules: [['@nuxtjs/pwa', { icon: false }], '@nuxtjs/robots'],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    extend (config) {
      config.module.rules.push({
        test: /\.min.css|\.min.js$/,
        use: [
          {
            loader: 'raw-loader',
            options: {
              esModule: false
            }
          }
        ],
        exclude: /(node_modules)/
      })
    },
    html: {
      minify: {
        collapseBooleanAttributes: true,
        collapseInlineTagWhitespace: true,
        collapseWhitespace: true,
        html5: true,
        decodeEntities: true,
        minifyCSS: true,
        minifyJS: true,
        processConditionalComments: true,
        removeComments: true,
        removeEmptyAttributes: true,
        removeRedundantAttributes: true,
        sortClassName: true,
        trimCustomFragments: true,
        useShortDoctype: true
      }
    }
  },
  generate: {
    dir: 'public',
    fallback: true
  },
  robots: {
    UserAgent: '*'
  }
}
