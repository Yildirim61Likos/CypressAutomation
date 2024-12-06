describe('Custom Commands',()=>
{
    it('Handling Links',()=>
    {
        //cypress donly works with css and xpath there is no link text or patial link text 
        cy.visit("https://www.smilegeneration.com/");

        // Custum Command !!! calling it from Support file 
        cy.clickLink("Catch the Must-See Interview with Montel Williams");

        //diract approach
        //cy.xpath("//span[normalize-space()='Catch the Must-See Interview with Montel Williams']").click();
        cy.xpath("//h1[@class='cmp-teaser__title']").should('be.visible');



    })


    it('Over Writing Existing Command',()=>
    {
        cy.visit("https://www.smilegeneration.com/");

        cy.clickLink("Catch THE Must-See Interview with Montel Williams");
        cy.xpath("//h1[@class='cmp-teaser__title']").should('be.visible');

    
    })



    it.only('Login Command ',()=>
    {
      //cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
      // Login

      cy.fixture('OrangeHRM').then((data)=>
      {
        cy.visit(data.URL);
        cy.LoginApp(data.username,data.password);
        cy.xpath("//span[normalize-space()='PIM']").should('be.visible').and('have.text',data.expected);

      })

    
    
    
    })




})