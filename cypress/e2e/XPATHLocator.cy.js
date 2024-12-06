describe('XPATHLOACTOR',() => 
{

it('xpathlocator test',() =>
{

    cy.visit("http://www.automationpractice.pl/index.php")

    cy.xpath("//div[@id='htmlcontent_home']/ul/li").should('have.length','5')



})


it('chained xpath', () => 
{


    cy.visit("http://www.automationpractice.pl/index.php")

    cy.xpath("//div[@id='htmlcontent_home']/ul").xpath("./li").should('have.length','5')



})

})