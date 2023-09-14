import SignUpPage from "./pages/signUpPage";
import UserAccountPage from "./pages/userAccountPage";

describe("Sign Up", () => {
  const date = Date.now();
  const randomEmail = `${date}@gmail.com`;
  const randomName = `QA ${date}`;
  const randomPassword = `pwd${date}`;

  beforeEach(() => SignUpPage.visit());

  it("should be able to sign up", () => {
    SignUpPage.signup(randomName, randomEmail, randomPassword);
    UserAccountPage.elements.accountDropdown().should("be.visible");
  });

  it("should not be able to sign up existing user", () => {
    SignUpPage.signup(randomName, randomEmail, randomPassword);
    SignUpPage.elements
      .emailErrorMessage()
      .contains("Please Enter a valid Email");
    cy.url().should("include", "/signup");
    UserAccountPage.elements.accountDropdown().should("not.exist");
  });
});
