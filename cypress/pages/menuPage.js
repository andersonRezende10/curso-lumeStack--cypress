class MenuPage {
    selectorList() {
        const selector = {
            myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]'
        }

        return selector
    }

    accessMyinfoButton() {
        cy.get(this.selectorList().myInfoButton).click()
    }
}
export default MenuPage