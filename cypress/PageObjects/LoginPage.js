class Login
{

    setUserName(username)
    {
       cy.xpath("//input[@placeholder='Username']").type(username);
    }


    setPassword(password)
    {
       cy.xpath("//input[@placeholder='Password']").type(password);
    }

    clickSubmit()
    {
       cy.xpath("//button[@type='submit']").click();
    }

    verifyLogin()
    {
        cy.xpath("//span[normalize-space()='PIM']").should('be.visible');
    }



}

export default Login;