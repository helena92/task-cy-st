import LoginPage from "./pages/loginPage";
import UserAccountPage from "./pages/userAccountPage";

describe("Log In", () => {
  const testUserEmail = Cypress.env("testUserEmail");
  const testUserPassword = Cypress.env("testUserPassword");

  beforeEach(() => LoginPage.visit());

  it("should be able to log in", () => {
    LoginPage.login(testUserEmail, testUserPassword);
    UserAccountPage.elements.accountDropdown().should("be.visible");
  });

  it("should not be able to log in with wrong password", () => {
    LoginPage.login(testUserEmail, "wrong");
    cy.url().should("include", "/login");
    LoginPage.elements
      .passwordErrorMessage()
      .contains("Please Enter a valid Password");
  });
});
