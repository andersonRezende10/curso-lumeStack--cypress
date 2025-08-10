class MyInfoPage {
    selectorList() {
        const selector = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]'
            
        }

        return selector
    }

    fillPersonalDetais(FirstNameTeste,LastNameTeste) {
         cy.get(this.selectorList().firstNameField).clear().type(FirstNameTeste)
         cy.get(this.selectorList().lastNameField).clear().type(LastNameTeste)
         
    }

    
}

export default MyInfoPage