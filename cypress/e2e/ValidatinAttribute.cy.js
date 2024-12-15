describe('Validating Attribute',()=>
{

    it('properties',function()
    {

     // 'have.value' 
     // 'have.text'
     // 'have.attr','minlength',2
     // we can get the properties with prop method in cypress !!!!
     // 

     cy.get("css selector").type("name");
     cy.get("css").select('gender');
     cy.get("css").should('have.value','name'); // have is the properties assertion // be is behavior then we validate it be !!!!
     cy.get("css").should('have.attr','minlength','2');
     cy.get("css").should('be.visible');


     


    })






})