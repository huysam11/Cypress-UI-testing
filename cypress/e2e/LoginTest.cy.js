/// <reference types="cypress"/>
beforeEach(() => {
  cy.visit('https://www.saucedemo.com/')
 
})
it('login with correct credential', () => {
  cy
    .get('[data-test="username"]').type('standard_user')
    .get('[data-test="password"]') .type('secret_sauce')
    .get('[data-test="login-button"]') .click()
    .get('.app_logo').should('be.visible')
})
it('login with incorrect credential', () => {
  cy
    .get('[data-test="username"]').type('standard_user1')
    .get('[data-test="password"]') .type('secret_sauce')
    .get('[data-test="login-button"]').click()
    .get('[data-test="error"]').should('be.visible')
})
it('login with locked out user', () => {
  cy
    .get('[data-test="username"]').type('locked_out_user')
    .get('[data-test="password"]') .type('secret_sauce')
    .get('[data-test="login-button"]').click()
    .get('[data-test="error"]').should('contain.text','Sorry, this user has been locked out')
    cy.clearCookies()
})

