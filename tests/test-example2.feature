@fast

Feature: Running Cucumber with TestCafe - test feature example 2
  As a user of Google
  I should be able to verify all top menu options
  to learn more about Google


  Scenario Outline: Google's <pageName> page title should contain "<words>"
    Given user goes to URL "https://about.google/"
    When user clicks <link> from test-page-example2
    Then the title should contain "<words>"

  Examples:
    | pageName        | link               | words                         |
    | Our products    | linkOurProducts    | Products & Services - Google  |
    | Our commitments | linkOurCommitments | Values & Commitments - Google |
    | Our stories     | linkOurStories     | Stories of Google             |
