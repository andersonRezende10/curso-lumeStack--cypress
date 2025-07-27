describe('Orange HRM Tests', () => {

    const selectorsList = {
        username: '[name="username"]',
        password: '[name="password"]',
        loginButton: '[type="submit"]',
        selectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
        wrongCredentialAlert: '[role="alert"]'
    }
    it('Login Success', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorsList.username).type('Admin')
        cy.get(selectorsList.password).type('admin123')
        cy.get(selectorsList.loginButton).click()
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(selectorsList.selectionTitleTopBar).contains('Dashboard')
    })

    it('Login Fail', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get(selectorsList.username).type('Test')
        cy.get(selectorsList.password).type('test')
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert) 
    })
})