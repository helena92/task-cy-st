/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to select DOM element by data-cy attribute with timeout per ms
     * @example cy.getByDataCy('greeting', { timeout: 50000 })
     */
    getByDataCy(value: string, timeout?: number): Chainable<Element>;
    /**
     * Custom command to select DOM element by idwith timeout per ms
     * @example cy.getById('greeting', { timeout: 50000 })
     */
    getById(value: string, timeout?: number): Chainable<Element>;
    /**
     * Custom command to select DOM element by class with timeout per ms
     * @example cy.getByClass('test-class', 50000)
     */
    getByClass(value: string, timeout?: number): Chainable<Element>;
  }
}
