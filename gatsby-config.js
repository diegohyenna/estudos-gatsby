module.exports = {
  siteMetadata: {
    title: `Pagina do Diego`,
    description: `É uma pagina de estudos sobre gatsby.js`,
    author: `diegohyenna`,
    copyright: `Diegohyenna, Todos os direitos reservados.`,
    siteUrl: `http://localhost:8000`,
    socialMedia: {
      github: `https://github.com/diegohyenna`,
      linkedin: `https://www.linkedin.com/in/diego-martins-362136123/`,
    },
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `pagina-do-diegohyenna`,
        short_name: `diegohyenna`,
        start_url: `/`,
        background_color: `#542c85`,
        theme_color: `#c9abdb`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
