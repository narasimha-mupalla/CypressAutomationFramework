Feature: User can sign up and log in with valid and invalid credentials

  # Scenario 1: User signs up with valid data
  Scenario: User can create an account with valid data
    Given I navigate to the signup page
    When I enter my first name
    And I enter my last name
    And I enter a valid random email for signup
    And I enter a new password
    And I confirm the new password
    And I submit the signup form
    Then I should see a success message "Thank you for registering with Main Website Store"
    When I click on the welcome button
    And I click on the signout button

  # Scenario 2: User logs in with valid credentials
  Scenario: User can log in with valid credentials
    Given I navigate to the CustomerLogin page
    When I enter my random email for login
    And I enter my random password
    And I click on the signin button

  # Scenario 3: User logs in with invalid credentials
  Scenario: User cannot log in with invalid credentials
    Given I navigate to the login page
    When I enter a random invalid email
    And I enter an invalid password
    And I submit the login form
    Then I should see an error message "The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later."
    And I should remain on the login page
