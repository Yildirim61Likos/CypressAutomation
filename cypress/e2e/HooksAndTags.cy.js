describe('MyTest Suite',()=>
    {

        // *** HOOKS IN CYPRESS ***
        // before   // before starting all the test in your describe only once
        // after    // only once after execution of all it blocks 
        // beforeEach  // before every each it blocks runs 
        // AfterEach   // after every each it blocks  runs


        // *** TAGS ***
        // skip , only 


        before('',()=>
        {
            cy.log("**** Launching App ****");
            cy.reload();
           

        })

        after('',()=>
        {

            cy.log("*** Close App ***");
            cy.reload();


        })




        beforeEach('',()=>
        {
            cy.log("This is Login");

        })



        afterEach('',()=>
        {
            cy.log("Logout the App");

        })




    it.skip('search',()=>   // test case 1
    {

        cy.log("***** seraching *****")




    })


    it.only('advance search',()=>   // test case 1
    {

        cy.log(" **** advance searching  *****")
        



    })


    it('listing products',()=>   // test case 1
    {

        cy.log("***** listing products *****")
        



    })





})