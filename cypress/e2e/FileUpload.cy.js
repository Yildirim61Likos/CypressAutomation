import 'cypress-file-upload'

describe('File Uploads', ()=>
{
    it('Single File Upload', ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.xpath("//input[@id='file-upload']").attachFile('Test1.txt');
        cy.xpath("//input[@id='file-submit']").click();
        cy.wait(5000);
        cy.xpath("//h3[normalize-space()='File Uploaded!']").should('be.visible').and('have.text','File Uploaded!');



    })

    it('File Upload Rename', ()=>
    {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.xpath("//input[@id='file-upload']").attachFile({filePath:'Test1.txt', fileName: 'myFile.txt'}); // to rename the file 
        cy.xpath("//input[@id='file-submit']").click();
        cy.wait(5000);
        cy.xpath("//h3[normalize-space()='File Uploaded!']").should('be.visible').and('have.text','File Uploaded!');

    
    
    })
    
    it('File Upload - Drag and Drop', ()=>
    {
        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.xpath("//div[@id='drag-drop-upload']").attachFile('Test1.txt',{subjectType:'drag-n-drop'});
        cy.wait(3000);
        cy.xpath("//span[normalize-space()='Test1.txt']")
        .contains('Test1.txt');

        
        
    })

    it('Multiple Files Upload', ()=>
    {
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.xpath("//input[@id='filesToUpload']").attachFile(['Test1.txt','Test2.png']);
        cy.wait(2000);
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')



            
    })


    it.only('File Upload Shadow Dom', ()=>
    {

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get(".smart-browse-input",{includeShadowDom:true}).attachFile("Test1.txt");
        cy.wait(2000);
        cy.get(".smart-item-name",{includeShadowDom:true}).contains('Test1.txt');
        





                
                
    })






})