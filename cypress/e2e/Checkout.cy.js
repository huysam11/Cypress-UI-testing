import PageObject from "./PageObjects.js";

it('Check out', () => {
    cy.visit('https://www.saucedemo.com/')
    const PO = new PageObject()
    PO.setUserName("standard_user")
    PO.setPassword("secret_sauce")
    PO.clickSubmit();
    cy
        .get('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]').click()
        .get('.shopping_cart_link').click()
        .get('[data-test="checkout"]').click()
        .get('[data-test="firstName"]').type('QA')  
        .get('[data-test="lastName"]').type('test')
        .get('[data-test="postalCode"]').type('123')
        .get('[data-test="continue"]').click()
        .get('.inventory_item_name').should('contain.text','T-Shirt')
        .get('[data-test="finish"]').click()
        .get('#checkout_complete_container').should('contain.text','Thank you for your order!')
        .get('[data-test="back-to-products"]').click()
        .get('.title').should('contain.text','Products')
        cy.clearCookies()
    })      