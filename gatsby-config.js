module.exports = {
  siteMetadata: {
    siteUrl: 'https://lep.mk.ua'
  },
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet-async',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.DEPLOY_URL
          ? 'https://lep-back-new-00f274d088e7.herokuapp.com/'
          : 'https://lep-back-new-00f274d088e7.herokuapp.com/',
        accessToken:
          'f3a7fe9838bb064bedda9d26edccff1485f8568fc2fe5c387b77278d8c78892718000c1808e8631e94277b38cc063fd5c32bbcbb77b33a4a946d37bd8e7854df843a1dd88a6d267381223fbb42cb1a38d678465f8b61993f88ca30b735033f31a977ed60170d46fe8fc2e3f04883d95df240585cad134f0a5e62e1f5d42e6a68',
        collectionTypes: [
          'index-service',
          'index-advantage',
          'index-partner',
          'index-review',
          'index-project'
        ],
        singleTypes: [
          'meta',
          'element-primary-menu',
          'element-contacts-menu',
          'page-not-found',
          'page-pricelist',
          'page-index'
        ]
      }
    },
    {
      resolve: 'gatsby-plugin-anchor-links',
      options: {
        offset: -100,
        duration: 300
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'lep.mk.ua',
        short_name: 'lep.mk.ua',
        start_url: '/',
        theme_color: '#ffffff',
        background_color: '#ffffff',
        display: 'standalone',
        icon: 'src/assets/favicon/favicon.png',
        icons: [
          {
            src: 'src/assets/favicon/favicon-16x16.png',
            sizes: '16x16',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'src/assets/favicon/favicon-32x32.png',
            sizes: '32x32',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'src/assets/favicon/android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'src/assets/favicon/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'src/assets/favicon/favicon-maskable.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    },
    'gatsby-plugin-offline'
  ]
};
