import PageObject from "./PageObjects.js";

it('Veify if correct URLs loaded', () => {
    cy.visit('https://www.saucedemo.com/')
    const PO = new PageObject()
    PO.setUserName("standard_user")
    PO.setPassword("secret_sauce")
    PO.clickSubmit();
   
    cy
        .get('.social_facebook > a')
        .invoke("removeAttr","target")
        .click()
        cy.origin('https://www.facebook.com/saucelabs', () => {
            cy.url().should('contain', 'facebook')
          })
    cy.clearCookies()
    })
