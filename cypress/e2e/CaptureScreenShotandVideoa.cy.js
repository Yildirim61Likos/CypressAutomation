describe('Mysuote',()=>{

    it('Capture Screenshots and videos',()=>
    {
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       // cy.screenshot('Login Page SS');
        //cy.wait(3000);
        //cy.xpath("//img[@alt='company-branding']").screenshot('Logo ');


        //Automatically capture screenshots and video on failure
        cy.xpath("//li[1]//a[1]//span[1]").should('be.visible');  // fails so we can get the ss and video
        // to get the video and ss we should run it with terminal  and on failures 
        


    })




})