describe('DropDown',() => 
{
it('dropDown with select' , () =>
{

    cy.visit("https://www.zoho.com/commerce/free-demo.html");

  // SELECT DROPDOWN

    cy.get("#zcf_address_country").select('Albania').should('have.value','Albania');

})


it('dropDown without Select ' , () =>
    {
    
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/");
    
      // without SELECT DROPDOWN
    
        cy.get("#select2-billing_country-container").click();
        cy.get(".select2-search__field").type("Japan").type('{enter}');
        cy.get("#select2-billing_country-container").should('have.text','Japan');



    })

    it('Auto suggestion dopdown' , () =>
        {
        
            cy.visit("https://www.wikipedia.org/");
        
          // Auto suggestion dropdown
        
            cy.get("#searchInput").type('Delhi');
            cy.get(".suggestion-title").contains('Delhi University').click();

    
        })

        it('Dynamic dopdown' , () =>
            {
            
                cy.visit("https://www.google.com/");
            
              // Auto suggestion dropdown

                cy.xpath("//textarea[@aria-label='Search']").type("cypress automation");
                


                cy.wait(3000);
                cy.xpath("//div[@class='wM6W7d']").should('have.length',13);

                
                // FOR EACH LOOP
                cy.xpath("//div[@class='wM6W7d']").each(($el, index, $list) =>
                {
                  if($el.text()=='cypress automation tutorial')
                      cy.wrap($el).click()
                      $el.click();

                })

                cy.xpath("//textarea[@aria-label='Search']").should('have.value','cypress automation tutorial')
            
        
            })

})