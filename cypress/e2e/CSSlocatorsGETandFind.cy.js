describe('CSSLocators' , () =>     
{
    it('css locators', () => 
    {
      cy.visit("https://opensource-demo.orangehrmlive.com/");
      
      cy.get("input[name='username']").type("Admin"); // we have used tag and attribute for this elements 
      // we can even use tagid , tagclass, tag attribute !!!

      cy.get("input[name='password']").type("admin123");


      cy.get("button[type='submit']").click();

      cy.title().should('eq','OrangeHRM');

      cy.get('.product:visible'); // this is only getting visible products !!!!

      cy.get('.product:visible').find('product').eq(2).contains('ADD TO CART').click().then(()=>
      {
        console.log("");
      });
      // or 
      cy.log("")



       //index 2 out of  product  // inside the get method we use find method to look for another elemet 
      // like child elements narrowing the scope  
      cy.get('.products').as('product');
      cy.get('@product'); 

      // put four product under for each loop !!!!
      cy.get('.products').find('product').each(($el,index,$list)=>
      {
        const textVeg =$el.find('h4 .product-name').text();
        if(textVeg.includes('Cashews')) // includes like contains
        {
          cy.wrap($el).find('button').click();
          print($list)

        }

      }) 

      // use then method to store an element into a variable
      // if it is cypress command we dont need to use then keyword but 
      // if its not cypress command you have to use then keyword to make it cypress command 
      //

       cy.get('.brand').then((element)=>
      {
        const text = element.text();
        cy.log(text);

      })
     



    } )


})