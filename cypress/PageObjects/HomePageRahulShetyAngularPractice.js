class HomePage
{

    static getEditBox()
    {
        return cy.get("input[name='name']:nth-child(2)");
    }

    static getTwoWayDataBinding()
    {
        return cy.get(":nth-child(4) > .ng-untouched");
    }

    static getGender()
    {
        return cy.get("select");
    }

    static getEntrepreneaur()
    {
        return cy.get("#inlineRadio3");
    }

    static getShopTab()
    {
        return cy.get(":nth-child(2) > .nav-link");
    }



}

export default HomePage;