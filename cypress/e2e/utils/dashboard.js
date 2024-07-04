import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
const login = new loginPage();
const dashboard = new dashboardPage();

Cypress.Commands.add('logout', () => {
    cy.visit('/')

    dashboard.profileDrop().click()
    cy.wait(5000)
    dashboard.logOut().click()
    login.usernameInput().should('be.visible')
})