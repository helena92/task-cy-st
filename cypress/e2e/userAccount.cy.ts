import LoginPage from "./pages/loginPage";
import UserAccountPage from "./pages/userAccountPage";

describe("User Account - Password Settings", () => {
  const testUserEmail = Cypress.env("testUserEmail");
  const testUserPassword = Cypress.env("testUserPassword");
  const newPassword = `p${Date.now()}`;

  beforeEach(() => {
    LoginPage.visit();
    LoginPage.login(testUserEmail, testUserPassword);
    UserAccountPage.elements.accountDropdown().should("be.visible");
    UserAccountPage.visitPasswordSettings();
  });

  it("should be able to modify user's password", () => {
    UserAccountPage.updatePassword(testUserPassword, newPassword);
  });

  after(() => {
    // This app allows to change the password to the old value but most services don't.
    // If reverting password back is not possible, we'd use API endpoints for creating a new user in before() hook and deleting them here in after() hook via API.
    cy.log(
      "Changing password back to the value in Cypress.env('testUserPassword')",
    );
    UserAccountPage.visitPasswordSettings();
    UserAccountPage.updatePassword(newPassword, testUserPassword);
  });
});
