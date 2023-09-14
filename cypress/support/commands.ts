/// <reference types="./commands.d.ts" />

Cypress.Commands.add("getByDataCy", (value, timeout) => {
  cy.get(`[data-cy="${value}"]`, { timeout });
});

Cypress.Commands.add("getById", (value, timeout) => {
  cy.get(`#${value}`, { timeout });
});

Cypress.Commands.add("getByClass", (value, timeout) => {
  cy.get(`.${value}`, { timeout });
});
