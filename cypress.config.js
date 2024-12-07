const { defineConfig } = require("cypress");

module.exports = defineConfig(
{
  video: true,
  reporter: 'cypress-mochawesome-reporter',// HTML REPORT
  e2e: {
    setupNodeEvents(on, config) 
    {

      require('cypress-mochawesome-reporter/plugin')(on);// HTML REPORT !!!
      // implement node event listeners here
    },
  },
});
