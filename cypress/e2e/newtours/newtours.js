import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../PageObjects/HomePageRahulShetyAngularPractice.js';


// Step Definition for 'Given I open the page'
Given('I open the page', () => {
    cy.visit("https://rahulshettyacademy.com/angularpractice/");
});

// Step Definition for 'When I add items to card'
When('I add items to card', () => {
    HomePage.getEditBox().type("name");
});

// Step Definition for 'And validate the total prices'
And('validate the total prices', () => {
    HomePage.getTwoWayDataBinding().should('have.value', 'name');
});

// Step Definition for 'Then select the country submit and verify Thank you'
Then('select the country submit and verify Thank you', () => {
    HomePage.getEditBox().should('have.attr', 'minlength', '2');
    HomePage.getEntrepreneaur().should('be.disabled');
    HomePage.getShopTab().click();
});