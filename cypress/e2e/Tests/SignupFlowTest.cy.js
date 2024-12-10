import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
import signupPage from '../Pages/SignupPage.cy.js';
import loginFlowValidCredentialsPage from '../Pages/LoginFlowValidCredentialsPage.cy.js';
import loginFlowInvalidCredentialsPage from '../Pages/LoginFlowInvalidCredentialsPage.cy.js';
import generateRandomData from '../Helpers/generateRandomData.js';

// Scenario 1: User signs up with valid data
Given('I navigate to the signup page', () => {
  signupPage.navigateToSignupPage();
});

When('I enter my first name', function () {
  const randomData = generateRandomData.generate();
  signupPage.enterFirstName(randomData.firstName);
  cy.wrap(randomData.firstName).as('generatedFirstName');
});

When('I enter my last name', function () {
  const randomData = generateRandomData.generate();
  signupPage.enterLastName(randomData.lastName);
  cy.wrap(randomData.lastName).as('generatedLastName');
});

When('I enter a valid random email for signup', function () {
  const randomData = generateRandomData.generate();
  signupPage.enterEmail(randomData.email);
  cy.wrap(randomData.email).as('generatedEmail');
});

When('I enter a new password', function () {
  const randomData = generateRandomData.generate();
  signupPage.enterPassword(randomData.password);
  cy.wrap(randomData.password).as('generatedPassword');
});

When('I confirm the new password', function () {
  cy.get('@generatedPassword').then(password => {
    signupPage.enterConfirmPassword(password);  // Use the generated password
  });
});

When('I submit the signup form', () => {
  signupPage.submitSignupForm();
});

Then('I should see a success message {string}', (successMessage) => {
  signupPage.verifySuccessMessage(successMessage);
});

When('I click on the welcome button', () => {
  signupPage.clickWelcomeButton();
});

And('I click on the signout button', () => {
  signupPage.clickLogoutButton();
});

// Scenario 2: User logs in with valid credentials
Given('I navigate to the CustomerLogin page', () => {
  loginFlowValidCredentialsPage.navigateToSigninPage();
});

When('I enter my random email for login', function () {
  const randomData = generateRandomData.generate();
  loginFlowValidCredentialsPage.enterEmail(randomData.email);
  cy.wrap(randomData.email).as('generatedEmail');
});

When('I enter my random password', function () {
  const randomData = generateRandomData.generate();
  loginFlowValidCredentialsPage.enterPassword(randomData.password);
  cy.wrap(randomData.password).as('generatedPassword');
});
When('I click on the signin button', () => {
  loginFlowValidCredentialsPage.clickLoginButton();
});
// Scenario 3: User logs in with invalid credentials
Given('I navigate to the login page', () => {
  loginFlowInvalidCredentialsPage.navigateToLoginPage();
});

When('I enter a random invalid email', function () {
  const randomData = generateRandomData.generate();
  loginFlowInvalidCredentialsPage.enterEmail(randomData.invalidEmail);
  cy.wrap(randomData.invalidEmail).as('generatedInvalidEmail');
});

When('I enter an invalid password', function () {
  const randomData = generateRandomData.generate();
  loginFlowInvalidCredentialsPage.enterPassword(randomData.invalidPassword);
  cy.wrap(randomData.invalidPassword).as('generatedInvalidPassword');
});

When('I submit the login form', () => {
  loginFlowInvalidCredentialsPage.clickLoginButton();
});

Then('I should see an error message {string}', (errorMessage) => {
  loginFlowInvalidCredentialsPage.verifyErrorMessage(errorMessage);
});

And('I should remain on the login page', () => {
  cy.url().should('include', '/customer/account/login');
});
