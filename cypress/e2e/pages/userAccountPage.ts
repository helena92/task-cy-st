class UserAccountPage {
  endpoints = {
    passwordSettings: "/settings/password",
  };

  elements = {
    accountDropdown: () => cy.getById("navbarDropdownPages"), // cy.getById is a custom command created in support/commands.ts
    currentPasswordInput: () => cy.getById("password"),
    newPasswordInput: () => cy.getById("new_password"),
    confirmPasswordInput: () => cy.getById("password_again"),
    submitButton: () => cy.getById("submit"),
    alertSuccess: () => cy.getByClass("alert-success"),
  };

  visitPasswordSettings() {
    cy.visit(this.endpoints.passwordSettings);
    this.elements.currentPasswordInput().should("be.visible");
  }

  updatePassword(oldPassword: string, newPassword: string) {
    this.elements.currentPasswordInput().type(oldPassword);
    this.elements.newPasswordInput().type(newPassword);
    this.elements.confirmPasswordInput().type(newPassword);
    this.elements.submitButton().click();
    this.elements.alertSuccess().contains("Password updated.");
  }
}

export default new UserAccountPage();
