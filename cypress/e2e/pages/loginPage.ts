class LoginPage {
  endpoints = {
    login: "/login",
  };

  elements = {
    emailInput: () => cy.getById("login"), // cy.getById is a custom command created in support/commands.ts
    passwordInput: () => cy.getById("password"),
    signInButton: () => cy.getById("submit"),
    passwordErrorMessage: () => cy.get(".error[for=password]"),
  };

  visit() {
    cy.visit(this.endpoints.login);
    this.elements.emailInput().should("be.visible");
  }

  login(email: string, password: string) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.signInButton().click();
  }
}

export default new LoginPage();
