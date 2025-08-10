import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance')
const chance = new Chance()

const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()
const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()

describe('Orange HRM Tests', () => {

    const selectorsList = {
        
        
        
        
        genericField: '.oxd-input--active',
        dateCloseButton: '.--close',
        submitButton: '[type="submit"]',
        genericCombobox: '.oxd-select-text--arrow',
        thirdItemCombobox: '.oxd-select-dropdown > :nth-child(4) > span'

    }

    it.only('Login Success', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
        //cy.wait(10000)
        dashboardPage.selectorDash()
        menuPage.accessMyinfoButton()
        myInfoPage.fillPersonalDetais(chance.first(), 'LastNameTeste')
        //myInfoPage.fillPersonalDetais('FirstNameTeste', 'LastNameTeste')
        cy.get(selectorsList.genericField).eq(2).clear().type('Teste')
        cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeTeste')
        cy.get(selectorsList.genericField).eq(4).clear().type('OtherTeste')
        cy.get(selectorsList.genericField).eq(5).clear().type('DriverTeste')
        cy.get(selectorsList.genericField).eq(6).clear().type('2025-04-12')
        cy.get(selectorsList.dateCloseButton).click()
        cy.get(selectorsList.submitButton).eq(1).click()
        cy.get('.oxd-toast-content').should('contain', 'Successfully Saved')
        cy.get(selectorsList.genericCombobox).eq(0).click()
        cy.get(selectorsList.thirdItemCombobox).click()
    })

    it('Login Fail', () => {
        cy.visit('/auth/login')
        cy.get(selectorsList.username).type(userData.userFail.username)
        cy.get(selectorsList.password).type(userData.userFail.password)
        cy.get(selectorsList.loginButton).click()
        cy.get(selectorsList.wrongCredentialAlert) 
    })
})