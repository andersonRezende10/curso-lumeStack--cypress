import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

    const selectorsList = {
        username: '[name="username"]',
        password: '[name="password"]',
        loginButton: '[type="submit"]',
        selectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
        wrongCredentialAlert: '[role="alert"]',
        myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
        firstNameField: '[name="firstName"]',
        lastNameField: '[name="lastName"]',
        generecField: '.oxd-input--active',
        dateCloseButton: '.--close',
        submitButton: '[type="submit"]'

    }

    it.only('Login Success', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.username).type(userData.userSuccess.username)
        cy.get(selectorsList.password).type(userData.userSuccess.password)
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorsList.selectionTitleTopBar).contains('Dashboard')
        cy.get(selectorsList.myInfoButton).click()
        cy.get(selectorsList.firstNameField).type('FirstNameTeste')
        cy.get(selectorsList.lastNameField).type('LastNameTeste')
        cy.get(selectorsList.generecField).eq(2).type('Teste')
        cy.get(selectorsList.generecField).eq(3).type('EmployeeTeste')
        cy.get(selectorsList.generecField).eq(4).type('OtherTeste')
        cy.get(selectorsList.generecField).eq(5).type('DriverTeste')
        cy.get(selectorsList.generecField).eq(6).type('2025-04-12')
        cy.get(selectorsList.dateCloseButton).click()
        cy.get(selectorsList.submitButton).eq(1).click()
        cy.get('.oxd-toast-content').should('contain', 'Successfully Saved')
    })

    it('Login Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.username).type(userData.userFail.username)
        cy.get(selectorsList.password).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert) 
    })
})