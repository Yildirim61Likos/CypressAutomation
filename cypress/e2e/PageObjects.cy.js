import HomePage from '../PageObjects/HomePageRahulShetyAngularPractice.js'

describe('page object model implementation',()=>
{

    it('',()=>
    {
        //  const homePage = new HomePage();

        cy.visit("https://rahulshettyacademy.com/angularpractice/");

        HomePage.getEditBox().type("name");
        HomePage.getGender().select('Male');
        HomePage.getTwoWayDataBinding().should('have.value','name');
        HomePage.getEditBox().should('have.attr','minlength','2');
        HomePage.getEntrepreneaur().should('be.disabled');
        HomePage.getShopTab().click();


        var sum=0;

        cy.get("css").each((el,index, list)=>
        {
            const amount =el.text();
            var res = amount.split();
            res=res[1].trim();

            sum = Number(sum)+ Number(res);

        }).then(function(){

            cy.log(sum)
        })



    })






})