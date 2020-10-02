/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  basePath: `/`,
  path: `${__dirname}/src/`,
  imagesPath: `${__dirname}/src/images/`,
  iconFile: `${__dirname}/src/images/icon.png`,
  typographyPath: `${__dirname}/src/utils/typography`,
  siteTitle: `CV`,
  siteUrl: `martin-andersen-cv.vercel.app`,
  siteName: `Martin Andersen`,
  siteShortName: `MA`,
  siteDescription: `This cool App contains information about my work experience as a software developer.`,
  siteKeywords: `Software developer, Full Stack Developer`,
  useMozJpeg: true,
  menuLinks: [
    // title:   Link text
    // color:   Animation background color on click
    { name: `home`, title: `Home`, color: `#000`, link: `` },
    { name: `experience`, title: `Experience`, color: `#3a3d98`, link: `` },
    { name: `skills`, title: `Skills`, color: `#d52d43`, link: `` },
    { name: `aboutMe`, title: `About Me`, color: `#fff`, link: `` },
    // { name: ``, title: `Batman`, link: `/imBatman`, color: `yellow` },
  ],
  email: `marander@pm.me`,
  social: {
    // Usernames
    twitter: `webmaeistro`,
    gitHub: `webmaeistro`,
    stackOverflow: `967956/webmaeistro`,
    linkedIn: `in/martin-andersen/`,
    resumeInPdf: `/CV-20.pdf`, // url or local link
  },
  homePage: {
    availableToHire: true,
    dotColors: ["#0e3e1e", "#6CC551"],
    h1Text: `Hi!, I'm Ma`,
    h2Text: `I'm a Full Stack Developer who got back into drupal `,
    typewriter: [
      `yay drupal`,
      `Gutenberg blocks rock`,
      `I'm a 🍕 lover`,
      `I'm a pretty fast learner and always interested in learning new technologies 🤓`,
      `I think one of my values is the <strong>ability to resolve problems<strong>`,
      `I like to share what I know 👨‍🏫`,
      `In my non-coding hours, I'm a' family man‍`,
      `I also do design and UX work using mostly <span style:'color: #27ae60;'>figma.com</span> `,
    ],
  },
  // Color for menu background
  shapeColor: {
    link: { color: "#171616", hover: "#fff" },
    shape1: {
      color: `#413f46`,
      opacity: `0.7`,
    },
    shape2: {
      color: `#e6e5ea`,
      opacity: `0.7`,
    },
    shape3: {
      color: `#fff`,
      opacity: `0.7`,
    },
  },
  footer: `heart`,
}

module.exports = function (userOptions = {}) {
  const options = Object.fromEntries(
    Object.entries(Object.assign({}, defaultOptions, userOptions)).map(
      ([key, value]) => {
        let newValue = value

        if (Array.isArray(value)) {
          newValue: [
            ...new Map(
              [...defaultOptions[key], ...value].map((item) => [
                item.name,
                item,
              ])
            ).values(),
          ]
        } else if (typeof value === "object") {
          newValue = { ...defaultOptions[key], ...value }
        }

        return [key, newValue]
      }
    )
  )

  const {
    basePath,
    path,
    imagesPath,
    iconFile,
    typographyPath,
    siteTitle,
    siteUrl,
    siteName,
    siteShortName,
    siteDescription,
    siteKeywords,
    useMozJpeg,
    menuLinks,
    email,
    social,
    homePage,
    shapeColor,
    footer,
  } = options

  return {
    siteMetadata: {
      title: siteTitle,
      siteName,
      siteKeywords,
      siteDescription,
      siteUrl,
      basePath,
      menuLinks,
      email,
      social,
      homePage,
      shapeColor,
      footer,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-page-creator`,
        options: {
          path: `${__dirname}/src/pages`,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: path,
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: imagesPath,
        },
      },
      `gatsby-transformer-remark`,
      `gatsby-plugin-emotion`,
      {
        resolve: `gatsby-plugin-typography`,
        options: {
          pathToConfigModule: typographyPath,
        },
      },
      {
        resolve: `gatsby-plugin-manifest`,
        options: {
          name: siteName,
          short_name: siteShortName,
          description: siteDescription,
          lang: `en`,
          start_url: `/`,
          background_color: `#000`,
          theme_color: `#fff`,
          display: `standalone`,
          icon: iconFile,
        },
      },
      {
        resolve: `gatsby-plugin-transition-link`,
        options: {
          layout: require.resolve(`./src/layout`),
        },
      },
      `gatsby-plugin-offline`,
      `gatsby-plugin-react-helmet`,
      {
        resolve: `gatsby-plugin-sharp`,
        options: {
          useMozJpeg,
        },
      },
      `gatsby-transformer-sharp`,
      {
        resolve: `gatsby-plugin-nprogress`,
        options: {
          // Setting a color is optional.
          // color: `tomato`,
          // Disable the loading spinner.
          showSpinner: true,
        },
      },
      {
        resolve: `gatsby-plugin-sitemap`,
        options: {
          exclude: [`/experience/_additionalSkills`],
        },
      },
    ],
  }
}
