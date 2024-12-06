describe('Assertion', () =>{

it('Assertion Implicit Assertions',() => 
{
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//assertions for implicit is should , and 

cy.url().should('include','orangehrmlive.com')
cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
cy.url().should('contain','orangehrm')



})


it('Assertion Implicit Chain',() =>
 {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    cy.url().should('include','orangehrmlive.com').
    should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').
    should('contain','orangehrm')


})

it('Assertion Chain with and keyword Implicit ',() =>
    {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.url().should('include','orangehrmlive.com').
       and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').
       and('contain','orangehrm')
   
   
   })

it('Assertion Neggative Implicit',() =>
    {
       cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       cy.url().should('include','orangehrmlive.com').
       and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').
       and('not.contain','greenorangehrm')
   

    cy.title().should('include','HRM')
    .and('eq','OrangeHRM')
   
   })

it('Assertion Neggative Implicit',() =>
    {
     cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
       
     cy.title().should('include','HRM')
     .and('eq','OrangeHRM')
     .and('contain','Orange')

     cy.get('.orangehrm-login-branding > img').should('be.visible')
     cy.get('.orangehrm-login-branding > img').should('exist')

     cy.xpath("//a").should('have.length','1')
     cy.xpath("//input[@placeholder='Username']").type("Admin")
     cy.xpath("//input[@placeholder='Username']").should('have.value','Admin')


   
   })


   it('Assertion Explicit Assertions',() => 
    {
    cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    
    //assertions for implicit is should , and 
    cy.xpath("//input[@placeholder='Username']").type("Admin")
    cy.xpath("//input[@placeholder='Password']").type("admin123")
    cy.xpath("//button[@type='submit']").click()
    
// BDD STYLE ASSERTION EXPECT !!!
     
    let expName="FirstNameTest LastNameTest";

    //let jg =cy.xpath("expect(actName).to.equal(expName)").text()

   // print("TEXT OF THE ELEMENT : "+jg)

    cy.xpath("//p[@class='oxd-userdropdown-name']").then((x) => 
    {
      let actName=x.text()

      // BDD STYLE ASSERTION

      expect(actName).to.equal(expName)
      expect(actName).to.not.equal(expName+"hghgg")

      // TDD STYLE ASSERTION

      assert.equal(actName,expName)
      assert.notEqual(actName,expName+"hguh")




    })


    
    
    })



})