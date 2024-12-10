class LoginFlowInvalidCredentialsPage {
  // Navigate to the Login Page
  navigateToLoginPage() {
    cy.visit('https://magento.softwaretestingboard.com/');  // Visit the login page
    cy.get('[href="#contentarea"]~ul li:nth-of-type(2)', { timeout: 15000 })  // Increased timeout to ensure visibility
      .click();  // Click on the 'Sign In' link to go to the login page
  }

  // Enter Email
  enterEmail(email) {
    cy.get('#email', { timeout: 15000 })  // Increased timeout to ensure element is available
      .type(email);  // Type the email in the email input field
  }

  // Enter Password
  enterPassword(password) {
    cy.get('#pass', { timeout: 15000 })  // Increased timeout to ensure element is available
      .type(password);  // Type the password in the password input field
  }
// Click the Login button
clickLoginButton() {
  cy.contains('button', 'Sign In', { timeout: 60000 })  // Corrected to use 'cy.contains'
    .should('be.visible')  // Ensure the button is visible before clicking
    .click();  // Click the login button to submit the form
}

  // Verify Error Message on Invalid Login
  verifyErrorMessage(errorMessage) {
    cy.get('[data-bind="html: $parent.prepareMessageForHtml(message.text)"]', { timeout: 50000 })  // Timeout for error message
      .should('be.visible')  // Ensure the error message is visible
      .and('contain.text', errorMessage);  // Check if the error message contains the expected text
  }
}

// Export an instance of the class for reuse across tests
const loginFlowInvalidCredentialsPage = new LoginFlowInvalidCredentialsPage();
export default loginFlowInvalidCredentialsPage;
