class loginPage {

    usernameInput() {
        return cy.get("input[name='username']")
    }

    passwordInput() {
        return cy.get("input[name='password']")
    }

    loginBtn() {
        return cy.get("button[type='submit']")
    }
}
export default loginPage