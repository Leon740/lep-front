module.exports = {
  siteMetadata: {
    siteUrl: "https://lep.mk.ua",
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-react-helmet-async",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.DEPLOY_URL
          ? "https://lep-back.herokuapp.com"
          : "http://localhost:1337",
        collectionTypes: [
          "index-service",
          "index-advantage",
          "index-partner",
          "index-review",
          "index-project",
        ],
        singleTypes: [
          "seo",
          "element-primary-menu",
          "element-contacts-menu",
          "page-not-found",
          "page-pricelist",
          "page-index",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
        duration: 300,
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "lep.mk.ua",
        short_name: "lep.mk.ua",
        start_url: `/`,
        theme_color: "#ffffff",
        background_color: "#ffffff",
        display: "standalone",
        icon: "src/assets/favicon/favicon.png",
        icons: [
          {
            src: "src/assets/favicon/favicon-16x16.png",
            sizes: "16x16",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/assets/favicon/favicon-32x32.png",
            sizes: "32x32",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/assets/favicon/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/assets/favicon/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "src/assets/favicon/favicon-maskable.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
    },
    "gatsby-plugin-offline",
  ],
};
