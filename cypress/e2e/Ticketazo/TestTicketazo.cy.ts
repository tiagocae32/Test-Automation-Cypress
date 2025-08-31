

import * as Constants from "./Constants"
import { userData } from "./Data/userData"

describe('Test registro Ticketazo', () => {
  beforeEach(() => {
    cy.visit(Constants.URL_TICKETAZO)
  })

  it('Happy path', () => {
    cy.title().should('eq', 'Ticketazo')
    cy.fillInputs(userData.password)
    cy.clickRegisterButton()
    cy.url().should('include', '/auth/login')
  })

  it('Error Generico', () => {
    cy.clickRegisterButton()
    cy.contains(Constants.ERROR_GENERICO).should('be.visible')
  })

  it('Error longitud contraseña', () => {
    cy.fillInputs(userData.wrongLengthPassword)
    cy.clickRegisterButton()
    cy.contains(Constants.ERROR_LONGITUD_PASSWORD).should('be.visible')
  })

  it('Error formato contraseña', () => {
    cy.fillInputs(userData.wrongFormatPassword)
    cy.clickRegisterButton()
    cy.contains(Constants.ERROR_FORMATO_PASSWORD).should('be.visible')
  })
})