import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
        username: '[name="username"]',
        password: '[name="password"]',
        loginButton: '[type="submit"]',
        selectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
        wrongCredentialAlert: '[role="alert"]'
    }

    it('Login Success', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.username).type(userData.userSuccess.username)
        cy.get(selectorsList.password).type(userData.userSuccess.password)
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorsList.selectionTitleTopBar).contains('Dashboard')
    })

    it('Login Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.username).type(userData.userFail.username)
        cy.get(selectorsList.password).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert) 
    })
})