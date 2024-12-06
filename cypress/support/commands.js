// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//// <reference types="Cypress"/> 

/// <reference types="cypress-xpath"/>
/// <reference types="@4tw/cypress-drag-drop" />
/// <reference types="cypress-file-upload" />

/// <reference types ="cypress" />




// like a creating method in java we created a cutom commands iframe 

Cypress.Commands.add('getIframe', (iframe) => 
{
     return cy.get(iframe)
    .its('0.contentDocument.body')
    .should('be.visible').then(cy.wrap);
    
})



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
  })


  // custom commands for cliking on link using label

  Cypress.Commands.add('clickLink',(label)=>
  {
    cy.get("a").contains(label).click();

  })

  // Over Wrting Contains Method 

  Cypress.Commands.overwriteQuery('contains',(originalFn, subject, filter, text, options = {})=>
  {
    //determine if a filter argument was passed 

    if(typeof text ==='object')
    {
        options = text 
        text =filter
        filter = undefined
    }

    options.matchCase = false

    return originalFn(subject, filter, text, options)



  })

  // CUSTOM COMMAND FOR LOGIN FUNC
  Cypress.Commands.add('LoginApp',(username,password)=>
   {
     cy.xpath("//input[@placeholder='Username']").type(username);
     cy.xpath("//input[@placeholder='Password']").type(password);
     cy.xpath("//button[@type='submit']").click();

   })
  



