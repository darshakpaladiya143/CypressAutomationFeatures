import loginPage from '../pages/loginPage.js'
import dashboardPage from '../pages/dashboardPage.js'
const login = new loginPage();
const dashboard = new dashboardPage();

Cypress.Commands.add('login', (data) => {
    cy.visit('/')
    login.usernameInput().type(data.username)
    login.passwordInput().type(data.password)
    login.loginBtn().click()
    cy.wait(6000)
    dashboard.welcomeTxt().contains(data.welcomeText)   
})