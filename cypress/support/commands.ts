/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//

import { userData } from "../e2e/Ticketazo/Data/userData"



declare global {
   namespace Cypress {
    interface Chainable {
        //login(email: string, password: string): Chainable<void>
        //drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
        //dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
        //visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
        fillInputs(password: string): Chainable<void>
        clickRegisterButton(): Chainable<void>
    }
   }
 }



Cypress.Commands.add('fillInputs', (password: string) => {
  cy.get('[data-cy="input-nombres"]').type(userData.nombres)
  cy.get('[data-cy="input-apellido"]').type(userData.apellido)
  cy.get('[data-cy="input-telefono"]').type(userData.telefono)
  cy.get('[data-cy="input-dni"]').type(userData.dni)
  cy.get('[data-cy="select-provincia"]').click()
  cy.get('[data-cy="select-provincia"]').type(`${userData.provincia}{enter}`)
  cy.get('[data-cy="select-localidad"]').click()
  cy.get('[data-cy="select-localidad"]').type(`${userData.localidad}{enter}`)
  cy.contains('dd').type(userData.fechaNacimiento.dd)
  cy.contains('mm').type(userData.fechaNacimiento.mm)
  cy.contains('aaaa').type(userData.fechaNacimiento.aaaa)
  cy.get('[data-cy="input-email"]').type(userData.email)
  cy.get('[data-cy="input-confirmar-email"]').type(userData.email)
  cy.get('[data-cy="input-password"]').type(password)
  cy.get('[data-cy="input-repetir-password"]').type(password)
})

Cypress.Commands.add('clickRegisterButton', () => {
  cy.get('[data-cy="btn-registrarse"]').click()
})
