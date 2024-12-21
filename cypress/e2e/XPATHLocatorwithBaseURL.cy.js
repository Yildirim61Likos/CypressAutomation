describe('XPATHLOACTOR',() => 
{

it('xpathlocator test',() =>
{

    const baseUrl = Cypress.env('BASE_URL');
    cy.log(baseUrl);
    cy.visit(baseUrl)

    cy.xpath("//div[@id='htmlcontent_home']/ul/li").should('have.length','5')



})


it('chained xpath', () => 
{


    const baseUrl = Cypress.env('BASE_URL');
    cy.visit(baseUrl)

    cy.xpath("//div[@id='htmlcontent_home']/ul").xpath("./li").should('have.length','5')



})

})