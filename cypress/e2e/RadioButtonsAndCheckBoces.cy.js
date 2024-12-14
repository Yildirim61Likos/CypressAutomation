describe('Check Ui Elments',() => {

    it('Checking Radio Buttons',() =>
    {
     cy.visit("https://practice.expandtesting.com/radio-buttons#google_vignette");


     // visibility of radio buttons 
     cy.xpath("//label[@for='basketball']").should('exist').and('be.visible');

     cy.xpath("//label[@for='football']").should('exist').and('be.visible');

     cy.xpath("//label[@for='tennis']").should('exist').and('be.visible');

     // selecting radio buttons

     cy.xpath("//input[@id='tennis']").check().should('be.checked');
     cy.xpath("//input[@id='football']").should('not.be.checked');
     cy.xpath("//input[@id='basketball']").should('not.be.checked');

     cy.xpath("//input[@id='football']").check().should('be.checked');
     cy.xpath("//input[@id='tennis']").should('not.be.checked');


    })



    it('Checking Check Boxess',() =>
        {
         cy.visit("https://practicesoftwaretesting.com/");
    
    
         // visibility of radio buttons 
         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7V"]').should('exist').and('be.visible'); // Hammer
    
         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7W"]').should('exist').and('be.visible'); //Hand saw

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7X"]').should('exist').and('be.visible'); //Wrench

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7Y"]').should('exist').and('be.visible'); // Screwdriver

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7Z"]').should('exist').and('be.visible');  //pliers

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA80"]').should('exist').and('be.visible');  // Chiels

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA81"]').should('exist').and('be.visible');   // Measures

        // then selecting single check box

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7V"]').check().should('be.checked');  //Hammer
         
         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7W"]').should('not.be.checked'); //Hand saw

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7X"]').should('not.be.checked'); //Wrench

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7Y"]').should('not.be.checked'); // Screwdriver

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7Z"]').should('not.be.checked');  //pliers

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA80"]').should('not.be.checked');  // Chiels

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA81"]').should('not.be.checked');  // Measures

         // Un selecting the check box

         cy.get('[data-test="category-01JDT95VBTHD0EBD8B1HBCKA7V"]').uncheck().should('not.be.checked');

         // SELECTING ALL THE CHECK BOXES


    
    
        })

it('Checking Select all check boxes',() =>
    {
     cy.visit("https://www.ironspider.ca/forms/checkradio.htm");


     // select all checked boxes 
     cy.xpath("//*[@id='Content']/div[1]/blockquote[1]//input").check().should('be.checked');

     cy.xpath("//*[@id='Content']/div[1]/blockquote[1]//input").uncheck().should('not.be.checked');
     cy.xpath("//*[@id='Content']/div[1]/blockquote[1]//input").check(['option2','option3']);
     



     //SELECT FIRST CHECK BOXES
    cy.xpath("//*[@id='Content']/div[1]/blockquote[1]//input").first().check().should('be.checked');
    cy.xpath("//*[@id='Content']/div[1]/blockquote[1]//input").last().check().should('be.checked');


    })




})