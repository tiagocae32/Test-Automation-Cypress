

import { ERROR_FORMATO_PASSWORD, ERROR_LONGITUD_PASSWORD, URL_TICKETAZO } from "./Constants"
import { userData } from "./Data/userData"
import { fillInputs } from "./Helpers"


describe('Test registro Ticketazo', () => {
  beforeEach(() => {
    cy.visit(URL_TICKETAZO)
  })

  it('Happy path', () => {
    cy.title().should('eq', 'Ticketazo')
    fillInputs(userData.password)
    cy.url().should('include', '/auth/login')
  })

  it('Error longitud contraseña', () => {
    fillInputs(userData.wrongLengthPassword)
    cy.contains(ERROR_LONGITUD_PASSWORD).should('be.visible')
  })

  it('Error formato contraseña', () => {
    fillInputs(userData.wrongFormatPassword)
    cy.contains(ERROR_FORMATO_PASSWORD).should('be.visible')
  })
})