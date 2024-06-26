
module.exports = {
  seo: {
  "title": "FastStore",
  "description": "A fast and performant store framework",
  "titleTemplate": "%s | FastStore",
  "author": "FastStore"
},

  // Theming
  theme: 'soft-blue',

  // Ecommerce Platform
  platform: 'vtex',

  // Platform specific configs for API
  api: {
    storeId: "faststoreangela",
    workspace: 'master',
    environment: 'vtexcommercestable',
    hideUnavailableItems: true,
    incrementAddress: false,
  },

  // Default session
  session: {
    currency: {
      code: "BRL",
      symbol: "R$",
    },
    locale: "pt-BR",
    channel: '{"salesChannel":1,"regionId":""}',
    country: "BRA",
    deliveryMode: null,
    addressType: null,
    postalCode: null,
    geoCoordinates: null,
    person: null,
  },

  cart: {
    id: '',
    items: [],
    messages: [],
    shouldSplitItem: true,
  },

  // Production URLs
  storeUrl: "https://faststoreangela.vtex.app",
  secureSubdomain: "https://secure.vtexfaststore.com/",
  checkoutUrl: "https://secure.vtexfaststore.com/checkout",
  loginUrl: "https://secure.vtexfaststore.com/api/io/login",
  accountUrl: "https://secure.vtexfaststore.com/api/io/account",

  previewRedirects: {
    home: '/',
    plp: "/fresh-food",
    search: "/s?q=metal",
    pdp: "/triple-buffered-alenas-79/p",
  },

  // Lighthouse CI
  lighthouse: {
    server: process.env.BASE_SITE_URL || 'http://localhost:3000',
    pages: {
      home: '/',
      pdp: "/triple-buffered-alenas-79/p",
      collection: "/vitrines",
    },
  },

  // E2E CI
  cypress: {
    pages: {
      home: '/',
      pdp: "/triple-buffered-alenas-79/p",
      collection: "/vitrines",
      collection_filtered: "/vitrines?category-1=fresh%20food&brand=Fresh%20Produce&facets=category-1%2Cbrand%27",
      search: "/s?q=metal",
    },
    browser: 'electron',
  },

  analytics: {
    // https://developers.google.com/tag-platform/tag-manager/web#standard_web_page_installation,
    gtmContainerId: "GTM-PG6PKL3F",
  },

  experimental: {
    nodeVersion: 18,
    cypressVersion: 12,
  },

  vtexHeadlessCms: {
    webhookUrls: [
      "https://faststoreangela.myvtex.com/cms-releases/webhook-releases",
    ],
  },
}
