
describe('Suite Name', () => 
{
    it('Test1 verify title- possitive test', () =>  //every each it block is a test case , and one cv.js file can have multiple describes which means test suite and 
    // every each suite can have n number of test cases !!!
    {
    //stepsss 
     cy.visit("https://opensource-demo.orangehrmlive.com/")

     cy.title().should('eq','OrangeHRM')

    })

    it('Test1 verify title- negative test', () =>  //every each it block is a test case , and one cv.js file can have multiple describes which means test suite and 
    // every each suite can have n number of test cases !!!
    {
    //stepsss 
     cy.visit("https://opensource-demo.orangehrmlive.com/")

     cy.title().should('eq','OrangeHRM123')

    })
   

  

})
