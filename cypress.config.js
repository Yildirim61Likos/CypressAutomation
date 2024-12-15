const { defineConfig } = require("cypress");


// we are using mocha framework
module.exports = defineConfig(
{
  video: true,
  reporter: 'cypress-mochawesome-reporter',// HTML REPORT
  e2e: {
    setupNodeEvents(on, config) 
    {
      specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',

      require('cypress-mochawesome-reporter/plugin')(on);// HTML REPORT !!!
      // implement node event listeners here
    },
  },
});
