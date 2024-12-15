describe('Handle Tab approach 1',() =>
{

// Cypress by default doesnt suppot child window, so thats why we are trying to open that new child window on the same window !!!

    it('Aproach 1',() =>
    {
     
       cy.visit("https://the-internet.herokuapp.com/windows");

       //we need to remove the target element on html and window will open on the same page  for that we use invoke method !!!!

       cy.xpath("//a[normalize-space()='Click Here']").invoke('removeAttr','target').click();

       cy.url().should('include','https://the-internet.herokuapp.com/windows/new'); // same page 

       cy.xpath("//h3[normalize-space()='New Window']").should('exist').and('be.visible');

       cy.wait(5000);
       // operations on child tab 
       
       cy.go('back'); // back to the parent tab !!!



       //  also child window 

       // if we know hfref attribute then we can move it directly 
       // and then cy.visit that url 
       // TO GET THE PROPERTIES 

       cy.get("//h3[normalize-space()='New Window']").then((el)=> // now we have the element !
      {
          const url =el.prop('href');
          cy.visit(url);


       })

    
    })


    it('Aproach 2',() =>
        {
         
           cy.visit("https://the-internet.herokuapp.com/windows");
    
           // get the href attribute 
    
           // passsing the element into a function then using the element getting the href attribute  !!!
           cy.xpath("//a[normalize-space()='Click Here']").then((e)=>
         {
            let SecondWindowUrl = e.prop('href');

            cy.visit(SecondWindowUrl);

         })

           
    
           cy.url().should('include','https://the-internet.herokuapp.com/windows/new'); // same page 
    
           cy.xpath("//h3[normalize-space()='New Window']").should('exist').and('be.visible');
    
           cy.wait(5000);
           // operations on child tab 
           
           cy.go('back'); // back to the parent tab !!!
        
        })
    




})