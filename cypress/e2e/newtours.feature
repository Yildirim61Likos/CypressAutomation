@regression
Feature: Test Case 1 

Background: open browser


@smoke
Scenario: Scenario first test case
   Given I open the page 
   When I add items to card 
   And validate the total prices
   Then select the country submit and verify Thank you 

@regression
Scenario: Second Home Page with parameters
    Given open newtours application
    When provide valid 'yildirim' and 'likos'
    Then click on submit button
    And verify title of the webpage 'Login: Mercury Tours'

 #with data table 
 @Datatable
Scenario: Second Home Page with parameters
    Given open newtours application
    When provide valid cred as following 
    |userName|password|
    |yildirim|likos61 |
    Then click on submit button
    And verify title of the webpage 'Login: Mercury Tours'


    


    