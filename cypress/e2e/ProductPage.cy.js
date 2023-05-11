import PageObject from "./PageObjects.js";
it('Product page should load when clicking Title and eImag', () => {
    cy.visit('https://www.saucedemo.com/')
    const PO = new PageObject()
    PO.setUserName("standard_user")
    PO.setPassword("secret_sauce")
    PO.clickSubmit();
    cy
        .get('#item_4_title_link > .inventory_item_name').click() 
        .get('.inventory_details_name').should('contain.text','Sauce Labs Backpack')
        .get('[data-test="back-to-products"]').click()
        .get('#item_4_img_link > .inventory_item_img').click()
        .get('.inventory_details_img').should('be.visible')
    cy.clearCookies()
 })       
