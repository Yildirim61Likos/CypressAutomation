describe('Handle Tables',()=>
{


    // This is the hook for cypress and this will run before every it block we have here 
    beforeEach('Login',()=>
    {
   
        cy.visit("https://demo.opencart.com/admin/index.php");


        cy.xpath("//input[@id='input-username']");
        cy.xpath("//input[@id='input-password']");
        cy.xpath("//button[@type='submit']").click();

        cy.xpath("//*[@id='menu-customer']/a").click();

        //DropDown selection
        cy.xpath("//*[@id='menu-customer']/a/following-sibling::ul/li").each(($el, index, $list) => 
        {

            if($el.text()=="Customers")
                
                cy.wrap($el).click();

        })


        // or we can just click main dropdow button and then the element we want to click !!!
        // cy.xpath("//*[@id='menu-customer']/a").click();
        //cy.xpath("//ul[@id='collapse-5']//a[contains(text(),'Customers')]").click();

    })


    it('Check Number Rows and Columns',()=>
    {
      
        //See howmany row is there and validate it
         cy.xpath("//*[@id='form-customer']/div[1]/table//tbody//tr").should('have.length',10);
        
         // See howmany column in the table 
        cy.xpath("//*[@id='form-customer']/div[1]/table//thead//tr//td").should('have.length',6);

    })

    it('Check cell data from specific row and column ',()=>
    {
    
        cy.xpath("//*[@id='form-customer']/div[1]/table//tbody//tr[5]//td[3]").contains("minhkhoi@gmail.com");
        

        cy.xpath("//*[@id='form-customer']/div[1]/table//tbody//tr[5]//td[3]").then((e)=>
        {
            let text=e.text();
            print(text);

        })

    })



    it('Read all the rows and columns data in the first page ',()=>
    {
       

        // FOR EACH LOOP This IMPORTANT 
        // FIRST EACH FOR ROWS AND THEN WE ARE GETTING COLS THEN PUTTING IT IN THE EACH LOOP AND GETTING ALL THE DATAS !!
        cy.xpath("//*[@id='form-customer']/div[1]/table//tbody//tr").each(($row,index, $rows)=>
        {
 
            cy.wrap($row).within(()=>
            {

                cy.get("td").each(($col,index,$cols)=>
                {


                    cy.log(($col.text()));


                })


            })


        })


    }) 

    it('Pagination',()=>
    {
        
        // HOW TO GET TOTAL PAGE OF THE TABLE
        cy.xpath("//div[@class='col-sm-6 text-end']").then((e)=>
        {
            var myText=e.text();
            // Showing 1 to 10 of 11770 (1177 Pages) this is the text
           var totalPages = myText.substring( myText.indexOf("(")+1,myText.indexOf("Pages")-1);
           cy.log(totalPages);

        })


        // HOW TO READ 5 PAGES FROM THE TABLE 

        let totalPagess= 5;

        for (let p=1; p<=totalPagess; p++)
        {
            if(totalPagess>1)
            {
                cy.log("Active page is  ==>"+p);

                cy.get("ul[class='pagination']>li:nth-child("+p+")").click();
                cy.wait(3000);

                cy.xpath("//*[@id='form-customer']/div[1]/table//tbody//tr").each(($row,index,$rows)=>
                {
                    cy.wrap(($row)).within(()=>
                    {
                        cy.get('td:nth-child(3)').then((e) =>
                        {
                            cy.log(e.text()); //email !!!

                        })
                    })

                })
            }

        }


    })

            
})