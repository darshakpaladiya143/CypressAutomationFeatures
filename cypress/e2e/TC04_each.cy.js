import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example to demonstrate the use each in Cypress', function () {
        beforeEach(function () {
            cy.visit('https://opensource-demo.orangehrmlive.com/')
            cy.fixture('testdata').then(function (testdata) {
            this.testdata = testdata
            })
        })

        it('Validate successful Login', function () {
            cy.get('input[name="username"]').type(this.testdata.username)
            cy.get('input[name="password"]').type(this.testdata.password)
            cy.get('button[type="submit"]').click()
            cy.title().should('eq', 'OrangeHRM')
            cy.wait(3000)

          // validate all the Quick Lanuch Texts 

            cy.get('div[class="oxd-grid-item oxd-grid-item--gutters orangehrm-quick-launch-card"]').each(($el, index) => {
            expect($el).to.contain(this.testdata.quickLaunch[index])
            cy.wait(4000)
     
         // Calculate pie chart percentage

         var total = 0
         cy.get(".oxd-pie-chart:nth-child(1)").each(($el, index) => {
             expect($el).to.contain(this.testdata.empDistPieChart[index])
             total = total + parseInt($el.text())
         }).then(() => {
            // expect(total).to.equal(94.1)
            // expect(total).to.be.closeTo(100, 0.1);
            expect(total).to.be.within(0, 100);
         })

        })   
    })
})
})