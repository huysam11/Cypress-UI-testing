class PageObject
{
    setUserName(username)
    {
        cy.get('[data-test="username"]').type(username)
    }
    setPassword(password)
    {
        cy.get('[data-test="password"]').type(password)
    }
    clickSubmit()
    {
        cy.get('[data-test="login-button"]') .click()
    }



    
}
export default PageObject

