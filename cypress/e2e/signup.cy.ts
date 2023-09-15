import SignUpPage from "./pages/signUpPage";
import UserAccountPage from "./pages/userAccountPage";

describe("Sign Up", () => {
  const date = Date.now();
  const testUserEmail = `${date}@gmail.com`;
  const testUserName = `QA ${date}`;
  const testUserPassword = `pwd${date}`;

  beforeEach(() => SignUpPage.visit());

  it("should be able to sign up", () => {
    SignUpPage.signup(testUserName, testUserEmail, testUserPassword);
    UserAccountPage.elements.accountDropdown().should("be.visible");
  });

  it("should not be able to sign up with existing user", () => {
    SignUpPage.signup(testUserName, testUserEmail, testUserPassword);
    SignUpPage.elements
      .emailErrorMessage()
      .contains("Please Enter a valid Email");
    cy.url().should("include", "/signup");
    UserAccountPage.elements.accountDropdown().should("not.exist");
  });
});
