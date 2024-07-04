import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example for writeFile and readFile (Smoke,E2E)', function () {

        it('Write to a text file test1.txt using writeFile', function () {
            cy.writeFile('cypress/fixtures/test1.txt', 'Youtube channel-@Darshak Paladiya\n')
        })

        it('Append content to the end of the text file test1.txt using the flag a+', function () {
            cy.writeFile('cypress/fixtures/test1.txt', 'Automation QA Engineer', { flag: 'a+' })
        })

        it('Write to a JSON file test2.json using writeFile', function () {
            cy.writeFile('cypress/fixtures/test2.json', { firstname: 'Darshak', lastname: 'Paladiya' })
        })

        it('Validate the content of both text and JSON file using readFile', function () {
            cy.readFile('cypress/fixtures/test1.txt').should('contain', 'Youtube channel-@Darshak Paladiya')
            cy.readFile('cypress/fixtures/test1.txt').should('eq', 'Youtube channel-@Darshak Paladiya\nAutomation QA Engineer')
            cy.readFile('cypress/fixtures/test2.json').its('firstname').should('eq', 'Darshak')
        })

    })
})