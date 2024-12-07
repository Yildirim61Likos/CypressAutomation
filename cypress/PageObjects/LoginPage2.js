class Login
{

    txtUserName="//input[@placeholder='Username']";
    txtPassword="//input[@placeholder='Password']";
    btnSubmit="//button[@type='submit']";
    lblMessage="//span[normalize-space()='PIM']";




    setUserName(username)
    {
       cy.xpath(this.txtUserName).type(username);
    }


    setPassword(password)
    {
       cy.xpath(this.txtPassword).type(password);
    }

    clickSubmit()
    {
       cy.xpath(this.btnSubmit).click();
    }

    verifyLogin()
    {
        cy.xpath(this.lblMessage).should('be.visible');
    }



}

export default Login;