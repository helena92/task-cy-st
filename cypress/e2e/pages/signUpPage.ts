class SignUpPage {
  endpoints = {
    signup: "/signup",
  };

  elements = {
    emailInput: () => cy.getById("email"), // cy.getById is a custom command created in support/commands.ts
    nameInput: () => cy.getById("name"),
    passwordInput: () => cy.getById("password"),
    agreeToTermsCheckbox: () => cy.getById("agree"),
    signUpButton: () => cy.getById("submit"),
    emailErrorMessage: () => cy.get(".error[for=email]"),
    nameErrorMessage: () => cy.get(".error[for=name]"),
  };

  visit() {
    cy.visit(this.endpoints.signup);
    this.elements.emailInput().should("be.visible");
  }

  signup(name: string, email: string, password: string) {
    this.elements.nameInput().type(name);
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.agreeToTermsCheckbox().click();
    this.elements.signUpButton().click();
  }
}

export default new SignUpPage();
