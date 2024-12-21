Feature: Login 

@Yildirim
Scenario: Login Hrm 
   Given I navigate to the HRM page
   When I log in as folllowing
   |userName| password |
   |Admin   | admin123 |
   And I click on submit 
   Then I validate dashboard logo 



    
