import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../PageObjects/HomePageRahulShetyAngularPractice.js';


// Step Definition for 'Given I open the page'
Given('I open the page', () => 
{
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
});

// Step Definition for 'When I add items to card'
When('I add items to card', () => 
{
    HomePage.getEditBox().type("name");
});

// Step Definition for 'And validate the total prices'
And('validate the total prices', () => 
{
    HomePage.getTwoWayDataBinding().should('have.value', 'name');
});

// Step Definition for 'Then select the country submit and verify Thank you'
Then('select the country submit and verify Thank you', () => 
{
    HomePage.getEditBox().should('have.attr', 'minlength', '2');
    HomePage.getEntrepreneaur().should('be.disabled');
    HomePage.getShopTab().click();
});



// Second scenario

//yildirim
//likos61

Given('open newtours application', () => 
{
    cy.visit("https://example.com/newtours");
});

// Step Definition for 'When I add items to card'
When('provide valid {string} and {string}', (userName,Password) =>
{
   cy.xpath("//input[@name='userName']").type(userName);
   cy.xpath("//input[@name='password']").type(Password);

});

//data table 
When('provide valid cred as following', (datatable) =>
    {
       datatable.hashes().forEach(element => 
    {
      cy.xpath("//input[@name='userName']").type(element.userName);
      cy.xpath("//input[@name='password']").type(element.password);
    });
       
    
    });

// Step Definition for 'And validate the total prices'
Then('click on submit button', () => 
{
  cy.xpath("//input[@name='submit']").click();   
});

// Step Definition for 'Then select the country submit and verify Thank you'
And('verify title {string} of the webpage', (title) => 
{
      cy.title().should('be.eq',title);
});
