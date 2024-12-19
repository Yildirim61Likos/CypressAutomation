const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;

// we are using mocha framework
module.exports = defineConfig(
{

  retries: 
      {
        // Configure retry attempts for `cypress run`
        // Default is 0
        runMode: 2,
        // Configure retry attempts for `cypress open`
        // Default is 0
        openMode: 0,
      },
      
  video: true,
  reporter: 'cypress-mochawesome-reporter',// HTML REPORT
  
  e2e: {

     specPattern: 'cypress/e2e/**/*.{cy.js,cy.jsx,cy.ts,cy.tsx,feature}',
     stepDefinitions: 'cypress/e2e/**/*.{js,ts}',
     
    setupNodeEvents(on, config) 
    {

     
      on('file:preprocessor', cucumber());

      require('cypress-mochawesome-reporter/plugin')(on);// HTML REPORT !!!
      // implement node event listeners here

      env: 
      {
        API_URL: 'https://api.example.com' // Another example we can store our env variables here and call it 
        // Cypress.ent('API_URL')
      }
      
      
    },
  },
});
