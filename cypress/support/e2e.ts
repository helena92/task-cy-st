import "./commands";

// If rerunning tests on https://www.cypress.io/ multiple times, some XHR requests start to fail causing the test to fail.
Cypress.on("uncaught:exception", () => {
  // returning false here prevents Cypress from failing the test
  return false;
});
