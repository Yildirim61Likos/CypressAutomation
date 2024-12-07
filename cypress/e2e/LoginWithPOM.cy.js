import Login from "../PageObjects/LoginPage2.js";


describe('POM',()=>
    
{
    
    it('Login Test',()=>
    {
        //General Approach

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.xpath("//input[@placeholder='Username']").type("Admin");
        cy.xpath("//input[@placeholder='Password']").type("admin123");
        cy.xpath("//button[@type='submit']").click();
        cy.xpath("//span[normalize-space()='PIM']").should('be.visible');

    })



    //Using POM !!!
    it.only('Login Test',()=>
        {
            
    
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            cy.fixture('OrangeHRM').then((data)=>
                
            {
                const ln=new Login();
                ln.setUserName(data.username);
                ln.setPassword(data.password);
                ln.clickSubmit();
                ln.verifyLogin();


            })

            
    
        })




        // using pom with fixtures !!!

        it('Login Test',()=>
            {
                //General Approach
        
                cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    
                const ln=new Login();
               
                ln.setUserName("Admin");
                ln.setPassword("admin123");
                ln.clickSubmit();
                ln.verifyLogin();
    
        
            })


})