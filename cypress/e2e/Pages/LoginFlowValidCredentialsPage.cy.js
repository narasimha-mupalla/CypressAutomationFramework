class LoginFlowValidCredentialsPage {
  // Navigate to the Sign In page
  navigateToSigninPage() {
    cy.visit('https://magento.softwaretestingboard.com/');
    cy.get('[href="#contentarea"]~ul li:nth-of-type(2)', { timeout: 10000 })
      .should('be.visible')  // Ensure the login link is visible before clicking
      .click();  // Navigate to the login page
  }

  // Enter Email
  enterEmail(email) {
    cy.get('[title="Email"]', { timeout: 10000 }).should('be.visible').type(email);  // Type the email passed from the fixture or random generator
  }

  enterPassword(password) {
    cy.get('[title="Password"]', { timeout: 60000 })
      .should('be.visible')
      .clear()  // Clear any pre-existing value
      .type(password);  // Type the generated password
  }

  // Click the Login button
clickLoginButton() {
  cy.contains('button', 'Sign In', { timeout: 60000 })  // Corrected to use 'cy.contains'
    .should('be.visible')  // Ensure the button is visible before clicking
    .click();  // Click the login button to submit the form
}
}
const loginFlowValidCredentialsPage = new LoginFlowValidCredentialsPage();
export default loginFlowValidCredentialsPage;
