class GenerateRandomData {
  generate() {
    const firstName = Cypress._.capitalize(Cypress._.random(0, 1) === 0 ? "john" : "jane");
    const lastName = Cypress._.capitalize(Cypress._.random(0, 1) === 0 ? "doe" : "smith");
    const email = `mnarasimha_${Date.now()}@example.com`;
    const password = `Password_${Cypress._.random(1000, 9999)}`;
    const invalidEmail = `invalid_${Date.now()}@example.com`;
    const invalidPassword = `Invalid_${Cypress._.random(1000, 9999)}`;

    return {
      firstName,
      lastName,
      email,
      password,
      invalidEmail,
      invalidPassword,
    };
  }
}

export default new GenerateRandomData();
