import PageObject from "./PageObjects.js";

it('Add&Remove with standard user', () => {
    cy.visit('https://www.saucedemo.com/')
    const PO = new PageObject()
    PO.setUserName("standard_user")
    PO.setPassword("secret_sauce")
    PO.clickSubmit();
    cy
        .get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
        .get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        .get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        .get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
        .get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
        .get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        .get('[data-test="remove-sauce-labs-backpack"]').click()
        .get('[data-test="remove-sauce-labs-bike-light"]').click()
        .get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
        .get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
        .get('[data-test="remove-sauce-labs-onesie"]').click()
        .get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
    })

it('Add&Remove with problem user (should fail) ', () => {
    cy.visit('https://www.saucedemo.com/')
     const PO = new PageObject()
    PO.setUserName("problem_user")
    PO.setPassword("secret_sauce")
    PO.clickSubmit();
        cy
                .get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
                .get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
                .get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
                .get('[data-test="add-to-cart-sauce-labs-fleece-jacket"]').click()
                .get('[data-test="add-to-cart-sauce-labs-onesie"]').click()
                .get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
                .get('[data-test="remove-sauce-labs-backpack"]').click()
                .get('[data-test="remove-sauce-labs-bike-light"]').click()
                .get('[data-test="remove-sauce-labs-bolt-t-shirt"]').click()
                .get('[data-test="remove-sauce-labs-fleece-jacket"]').click()
                .get('[data-test="remove-sauce-labs-onesie"]').click()
                .get('[data-test="remove-test.allthethings()-t-shirt-(red)"]').click()
                cy.clearCookies()
})