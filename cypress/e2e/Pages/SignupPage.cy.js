class SignupPage {
  // Navigate to the signup page
  navigateToSignupPage() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('[href="#contentarea"]~ul li:nth-of-type(3)', { timeout: 60000 })
      .should('be.visible')
      .click(); // Navigate to 'Create Account' section
  }

  // Enter the first name in the signup form
  enterFirstName(firstName) {
    cy.get('#firstname', { timeout: 10000 }).should('be.visible').type(firstName);
  }

  // Enter the last name in the signup form
  enterLastName(lastName) {
    cy.get('#lastname', { timeout: 10000 }).should('be.visible').type(lastName);
  }

  // Enter the email address in the signup form
  enterEmail(email) {
    cy.get('[title="Email"]', { timeout: 10000 }).should('be.visible').type(email);
  }

  // Enter the password in the signup form
  enterPassword(password) {
    cy.get('[title="Password"]', { timeout: 10000 }).should('be.visible').type(password);
  }

  // Enter the confirm password in the signup form
  enterConfirmPassword(confirmPassword) {
    cy.get('[title="Confirm Password"]', { timeout: 10000 }).should('be.visible').type(confirmPassword);
  }

  // Submit the signup form
  submitSignupForm() {
    cy.get('[title="Create an Account"]', { timeout: 10000 }).should('be.visible').click();
  }

  // Verify that the success message appears after successful registration
  verifySuccessMessage(successMessage) {
    cy.get('[data-ui-id="message-success"] div', { timeout: 50000 })
      .should('be.visible')
      .and('contain.text', successMessage);
  }
 // Click the Welcome Button (User account menu)
 clickWelcomeButton() {
  cy.get('[data-action="customer-menu-toggle"]')
  .first()
  .click();  
}

  // Click the logout button
  clickLogoutButton() {
    cy.get('.authorization-link > a:visible', { timeout: 10000 })
      .should('contain.text', 'Sign Out')
      .click();
  }
}

const signupPage = new SignupPage();
export default signupPage;
