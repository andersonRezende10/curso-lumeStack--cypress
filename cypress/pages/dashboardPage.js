class DashboardPage {
    selector() {
        const selector = {
            dashboardGrid: '.orangehrm-dashboard-grid'

        }

        return selector
    }

    selectorDash() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selector().dashboardGrid)
    }
}

export default DashboardPage