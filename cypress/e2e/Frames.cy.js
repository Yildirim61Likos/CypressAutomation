import 'cypress-iframe'


describe('Frames',() =>
{
 
it('Approach 1',() =>
{ 
   cy.visit("https://the-internet.herokuapp.com/iframe");

   cy.xpath("//*[name()='path' and contains(@d,'M17.3 8.2L')]").click();


   // getting the frame and saving it in the constants in the varable 

   const iframe =cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);

   iframe.clear().type("Welcome {ctrl+a}");

   cy.get("[aria-label='Bold']").click();

})


it('Approach 2 Custom commands ',() =>
    { 
       cy.visit("https://the-internet.herokuapp.com/iframe");
    
       cy.xpath("//*[name()='path' and contains(@d,'M17.3 8.2L')]").click();

       // calling our own command here  !!!

       cy.getIframe("#mce_0_ifr").clear().type("Welcome {ctrl+a}");
    
       // const iframe =cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);
    
       cy.get("[aria-label='Bold']").click();
    
    })


    it.only('Approach 3 by using cypress iframe plugin ',() => // most important one !!!
        { 
           cy.visit("https://the-internet.herokuapp.com/iframe");
           

           // switching the frame !!!! 
           // we need to provide the id of the farmeeee !!!

           cy.xpath("//*[name()='path' and contains(@d,'M17.3 8.2L')]").click();



           cy.frameLoaded('#mce_0_ifr'); // ;Load the frame
           cy.iframe("#mce_0_ifr").clear().type("Welcome Yildirim Welcome !!!");

           // another way doing it  cy.iframe().find("[aria-label='Bold']").eq(0).click();

           cy.get("[aria-label='Bold']").click();
        

        })



})