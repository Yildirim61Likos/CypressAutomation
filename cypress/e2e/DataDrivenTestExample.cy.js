describe('MyTestSuite',()=>
{
    it('Data Driven Test',()=>
    {
        cy.fixture("OrangeHRM2").then((data)=>
        {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach((userData) => 
            {

              cy.xpath("//input[@placeholder='Username']").type(userData.username);
              cy.xpath("//input[@placeholder='Password']").type(userData.password);
              cy.xpath("//button[@type='submit']").click();

              if(userData.username=='Admin' && userData.password =='admin123')
             {
                cy.xpath("//span[normalize-space()='PIM']").should('be.visible').and('have.text',userData.expected);
                cy.xpath("//p[@class='oxd-userdropdown-name']").click();
                cy.xpath("//a[normalize-space()='Logout']").click();
                

             }else
             {
                cy.xpath("//p[@class='oxd-text oxd-text--p oxd-alert-content-text']").should('have.text',userData.expected);

             }

            });

        })

    })

})