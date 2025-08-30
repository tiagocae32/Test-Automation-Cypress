import { userData } from "../Data/userData"


function generateRandomDNI(): string {
  return Math.floor(10000000 + Math.random() * 90000000).toString()
}

function generateRandomEmail(): string {
  return `test${Math.floor(Math.random() * 100000)}@gmail.com`
}


function fillInputs(password: string) {
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
  cy.get('[data-cy="btn-registrarse"]').click()
}



export { generateRandomDNI, generateRandomEmail,fillInputs }