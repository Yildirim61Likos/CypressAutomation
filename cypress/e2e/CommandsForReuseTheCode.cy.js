describe('Commands Methods ', function()
{

    it.only('Example',function()
    {

     cy.visit("https://rahulshettyacademy.com/angularpractice/");
     cy.xpath("//a[normalize-space()='Shop']").click();


     // using the custom commands !!!

     cy.SelectProduct('Blackberry',"h4.card-title","button.btn.btn-info");
     cy.SelectProduct('Nokia Edge',"h4.card-title","button.btn.btn-info");




     cy.get("h4.card-title").each((el,index,list)=>
    {
        if(el.text().includes('Blackberry'))
        {
            cy.get("button.btn.btn-info").eq(index).click();



        }


     })

    })



    it('Example32',function()
    {

     cy.visit("https://rahulshettyacademy.com/angularpractice/");
     cy.xpath("//a[normalize-space()='Shop']").click();


     // using the custom commands !!! with multiple data !!!

     cy.fixture('example').then((data)=>
    {

        data.productName.forEach(element => // product name is an array and you need to read it go through the for each loop 
        {
            cy.SelectProduct(element,"h4.card-title","button.btn.btn-info")
            
        });

      

     })
    })

})