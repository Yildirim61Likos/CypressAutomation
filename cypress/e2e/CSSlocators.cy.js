describe('CSSLocators' , () =>     
{
    it('css locators', () => 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/")
      
      cy.get("input[name='username']").type("Admin") // we have used tag and attribute for this elements 
      // we can even use tagid , tagclass, tag attribute !!!

      cy.get("input[name='password']").type("admin123")


      cy.get("button[type='submit']").click()

      cy.title().should('eq','OrangeHRM')

    } )


})