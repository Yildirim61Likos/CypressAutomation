
describe('Mouse Operations',()=>
{
   
    it('Mouse Hover',()=>
    {
        cy.visit("https://demo.opencart.com");

        cy.xpath("//a[normalize-space()='Mac (1)']").should('not.be.visible');

        cy.xpath("//a[normalize-space()='Desktops']").trigger('mouseover').click(); // action classs 

        cy.xpath("//a[normalize-space()='Mac (1)']").should('be.visible'); // assertion pint with should 


    })

    it('Right Click',()=>
    {
    
        cy.visit("https://swisnl.github.io/jQuery-contextMenu//demo.html");

        // approach 1
        cy.xpath("//span[text()='right click me']").trigger('contextmenu');
        cy.get('.context-menu-icon-copy').should('be.visible');

        // approach 2
        cy.xpath("//span[text()='right click me']").rightclick();
        cy.get('.context-menu-icon-copy').should('be.visible');

    
    })


   it('Double Click',()=>
    {

        cy.visit("https://www.w3schools.com/js/js_classes.asp");

        cy.frameLoaded("#iframeResult"); // load the frame !!!

        //approach 1
         // to iteract with the element inside of the iframe we need to load to frame then use the frame then find the element 
         // then do what you wanna do
        cy.iframe("iframeResult").find("//a[normalize-space()='AWS Intro']").trigger('dblclick'); // trigger is the Action class  

        cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World'); // assertion point should 

        // approach 2 - dblclick()

        cy.iframe("iframeResult").find("//a[normalize-space()='AWS Intro']").dblclick();

        cy.iframe("#iframeResult").find("#field2").should('have.value','Hello World'); 

    })

    it('Drog and Drop Using Plugin',()=>
    {
    
        cy.visit("https://dhtmlgoodies.com/");
        cy.xpath("//a[normalize-space()='Example code: Simple Context Menu']").should('be.visible');
        cy.xpath("//a[normalize-space()='Example code: Simple Context Menu']").should('be.visible');
        cy.wait(3000);
        cy.xpath("//a[normalize-space()='Example code: Simple Context Menu']")
        .drag("//a[normalize-space()='jQuery Context Menu Demo Gallery']",{force:true});

    })



    it.only('Scrolling Page',()=>
    {
    
        cy.visit("https://www.countries-ofthe-world.com/flags-of-the-world.html");

        cy.xpath("//img[@alt='Flag of Turkey']").scrollIntoView({duration:2000});

        cy.xpath("//img[@alt='Flag of Turkey']").should('be.visible');

        cy.xpath("//img[@alt='Flag of Madagascar']").scrollIntoView({duratio:2000});

        cy.xpath("//img[@alt='Flag of Madagascar']").should('be.visible');

        


    })
})