class dashboardPage {

    welcomeTxt() {
        return cy.get("h6[class='oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module']")
    }

    profileDrop() {
        return cy.get("span[class='oxd-userdropdown-tab']")
    }

    logOut(){
        return cy.get(':nth-child(4) > .oxd-userdropdown-link')
    }
}

export default dashboardPage