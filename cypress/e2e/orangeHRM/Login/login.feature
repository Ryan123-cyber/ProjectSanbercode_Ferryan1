Feature: Login Feature

    Scenario: Login with Valid Credentials
      Given I Visit the URL
      And I should see the homepage
      When I submit the Username
      And I submit the Password
      Then I click the button Login
      Then I verify login success
    
    Scenario: Login with invalid username
      Given I Visit the URL
      And I should see the homepage
      When I submit the invalid username
      And I submit the Password
      Then I click the Login button
      Then I should see error message

    Scenario: Login with invalid password
      Given I Visit the URL
      And I should see the homepage
      When I submit the Username
      And I submit the invalid password
      Then I click the Login button
      Then I should see error message

    Scenario: Login with invalid username and invalid password
      Given I Visit the URL
      And I should see the homepage
      When I submit the invalid username
      And I submit the invalid password
      Then I click the Login button
      Then I should see error message