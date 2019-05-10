module.exports = {
  siteMetadata: {
    title: "Tom Fischer",
    description:
      "I am a Software Engineer from Waterloo Ontario. Check out my website to learn more about me!",
    author: "Tom Fischer",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/static/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Tom Fischer",
        short_name: "tom",
        start_url: "/",
        background_color: "#0D47A1",
        theme_color: "#0D47A1",
        display: "minimal-ui",
        icon: "static/images/favicon.png",
      },
    },
    {
      resolve: "gatsby-plugin-material-ui",
      // If you want to use styled components, in conjunction to Material-UI, you should:
      // - Change the injection order
      // - Add the plugin
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    "gatsby-plugin-styled-components",
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
