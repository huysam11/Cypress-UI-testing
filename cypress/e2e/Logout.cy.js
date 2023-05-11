import PageObject from "./PageObjects.js";

it('Log out', () => {
    cy.visit('https://www.saucedemo.com/')
    const PO = new PageObject()
    PO.setUserName("standard_user")
    PO.setPassword("secret_sauce")
    PO.clickSubmit();
    cy.get('#react-burger-menu-btn').click()
    cy.get('#logout_sidebar_link').click()
    cy.get('.login_logo').should('contain','Swag Labs')

})      