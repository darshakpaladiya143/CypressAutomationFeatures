import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Login to OrangeHRM website (E2E)', function () {
        beforeEach(function () {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            cy.fixture('testdata').then(function (testdata) {
                this.testdata = testdata
            })
        })

        it('Validate successful Login', function () {
            cy.get('input[name="username"]').type(this.testdata.username)
            console.log(this.testdata.username)
            cy.get('input[name="password"]').type(this.testdata.password)
            cy.get('button[type="submit"]').click()
            cy.wait(5000)
            cy.title().should('eq', 'OrangeHRM')
        })
    })
})
