describe('Mysuite',()=>{


    // go()
    it('Navigation Test',()=>{

        cy.visit('https://www.countries-ofthe-world.com/', { failOnStatusCode: false });

        cy.title().should('eq','Countries of the world: flags, capitals, currencies, time zones, calling codes, TLDs'); // home page
        cy.xpath("//a[normalize-space()='World Currencies']").click();
        cy.xpath("//h1[normalize-space()='List of currencies of the world']").should("have.text",'List of currencies of the world');
        cy.go('back'); // home page 
        cy.title().should('eq','Countries of the world: flags, capitals, currencies, time zones, calling codes, TLDs'); // home page
        cy.go('forward');
        cy.xpath("//h1[normalize-space()='List of currencies of the world']").should("have.text",'List of currencies of the world');
        cy.go(-1);// home
        cy.go(1);
        cy.reload();


    })



})