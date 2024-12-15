describe('Alerts',() => 
{
// 1-) Javascript Alert : it will have some text and an 'OK' button

it('JS First Alert', () => 
{
   cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
   cy.xpath("//button[@onclick='jsAlert()']").click();

   cy.on('window:alert',(t)=>
   {
       expect(t).to.contains('I am a JS Alert');
       expect(t).to.equal('I am a JS Alert');


   })

   // Alert window is already closed by cypress

   cy.xpath("//p[@id='result']").should('exist').and('be.visible').and('have.text','You successfully clicked an alert');


   

})

// 2-) Javascript confirm alert : it will have some text with 'OK' and 'CANCEL' buttons
// only keyword will execute only the this it block !!! , skip is skipping the other it blocks 
it('JS Confirmation Alert', () => 
    {
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

       cy.xpath("//button[@onclick='jsConfirm()']").click();
    
       cy.on('window:confirm',(t)=>
        {
            expect(t).to.contains('I am a JS Confirm');
     
        })
       
        // cypress closed the alert 

        cy.xpath("//p[@id='result']").should('have.text','You clicked: Ok');
        
         
    
    })
    

// 2-) Javascript confirm alert : it will have some text with 'OK' and 'CANCEL' buttons
// only keyword will execute only the this it block !!! , skip is skipping the other it blocks 
it('JS Confirmation Alert Cancel ', () => 
    {
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

       cy.xpath("//button[@onclick='jsConfirm()']").click();
    
       cy.on('window:confirm',(t)=>
        {
            expect(t).to.contains('I am a JS Confirm');
     
        })

        cy.on('window:confirm',()=> false); // cypress will close the window using cancel button
       
        // cypress closed the alert 

        cy.xpath("//p[@id='result']").should('have.text','You clicked: Cancel');
        
         
    
    })







// 3-) Javascript Prompt Alert: I will have some text with a text box for user input along with 'OK'

it('JS Prompt Alert', () => 
    {
       cy.visit("https://the-internet.herokuapp.com/javascript_alerts");

     cy.window().then((win)=>
     {
      cy.stub(win,'prompt').returns('welcome')


     })


       cy.xpath("//button[@onclick='jsPrompt()']").click();
    
       //cy.on('window:prompt',()=> false); // cypress will close the window using cancel button
       // Alert window is already closed by cypress
    
       cy.xpath("//p[@id='result']").should('exist').and('be.visible').and('have.text','You entered: welcome');
    
    
       
    
    })







// 4-) Authenticated Alert

it.only('JS Authenticated Alert', () => 
    {
      
      /*
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: {username: 'admin', password: 'admin'}});

       cy.xpath("//p[contains(text(),'Congratulations! You must have the proper credenti')]").should('have.contain','Congratulations');
    

      */


      // https://admin:admin@the-internet.herokuapp.com/basic_auth
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")

        cy.xpath("//p[contains(text(),'Congratulations! You must have the proper credenti')]")
        // .should('have.contain','Congratulations');



    })




// by default cypress handle the alert we dont need to do anything 
// but if you want to do action we will do 











})