import pkg from "./package.json";

export default {
  mode: "universal",

  /*
   ** Headers of the page
   */
  head: {
    title: "Web Agency Lokeren | The Web made affordable",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "We begeleiden onze klanten van A tot WWW om hun online identiteit te ontwikkelen. Van logo tot website, hosting, SEO en facturatiesoftware."
      }
    ],
    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "https://wiven.be/wp-content/uploads/2017/12/favicon.png"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://blackrockdigital.github.io/startbootstrap-agency/vendor/bootstrap/css/bootstrap.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://blackrockdigital.github.io/startbootstrap-agency/vendor/fontawesome-free/css/all.min.css"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Montserrat:400,700"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css?family=Kaushan+Script"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700"
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href:
          "https://blackrockdigital.github.io/startbootstrap-agency/css/agency.min.css"
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#3b8070" },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    "@nuxtjs/axios"
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  router: {
    linkActiveClass: "wiven-active"
  }
};
