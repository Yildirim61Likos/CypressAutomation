import { Given, When, Then } from "cypress-cucumber-preprocessor/steps"; 

Given('I navigate to the HRM page',()=>
{
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

})

When('I log in as folllowing',(datatable)=>
{
    datatable.hashes().forEach(element => 
        {
          cy.xpath("//input[@placeholder='Username']").type(element.userName);
          cy.xpath("//input[@placeholder='Password']").type(element.password);
        });


})


And('I click on submit',()=>
{

    cy.xpath("//button[@type='submit']").click();

    
})


Then('I validate dashboard logo',()=>
{
    cy.xpath("//img[@alt='client brand banner']").should('be.visible');
})



