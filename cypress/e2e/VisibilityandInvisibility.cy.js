describe('visble and invisible',()=>{

    it('',()=>
    {

        cy.get("#displayed-text").should('be.visible');
        cy.xpath("//input[@id='hide-textbox']").click();
        cy.get("#displayed-text").should('not.be.visible');
        cy.xpath("//input[@id='show-textbox']").click();
        cy.get("#displayed-text").should('be.visible');


    })









})