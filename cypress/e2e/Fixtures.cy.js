describe('MyTestSuite',()=>
{



    // Direct Access 
    it('FixturesDemoTest',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('OrangeHRM').then((data)=>    
        {
            cy.xpath("//input[@placeholder='Username']").type(data.username);
            cy.xpath("//input[@placeholder='Password']").type(data.password);
            cy.xpath("//button[@type='submit']").click();

            cy.xpath("//span[normalize-space()='PIM']").should('be.visible').and('have.text',data.expected);
           

        })

    })



    // Access through HOOk - got multiple it blocks

    let userData;
    before('',()=>
    {
        cy.fixture("OrangeHRM").then((data)=>
        {
            userData=data;

        })



    })


    it.only('FixturesDemoTest',()=>
    {
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            cy.xpath("//input[@placeholder='Username']").type(userData.username);
            cy.xpath("//input[@placeholder='Password']").type(userData.password);
            cy.xpath("//button[@type='submit']").click();

            cy.xpath("//span[normalize-space()='PIM']").should('be.visible').and('have.text',userData.expected);


    })






})