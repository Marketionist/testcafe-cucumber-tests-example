@fast

Feature: Running Cucumber with TestCafe - test feature example 1
  As a user of Google
  I should be able to see the Products page
  to learn more about Google


  Scenario: Google's Products page title should contain "Google"
    Given user goes to URL "https://www.google.com/"
    When user clicks linkAbout from test-page-example1
    And user clicks "test-page-example2"."linkOurProducts"
    Then the title should contain "Google"
    And the title length should be less than 75 characters
