const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: "85azxn",

  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    baseUrl: "https://buger-eats-qa.vercel.app",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  }
})