describe('Example to demonstrate parent, parents and children commands in Cypress', () => {

    before(() => {
        // Visit the Wikipedia page for Cypress (test framework)
        cy.visit('https://en.wikipedia.org/wiki/Cypress_(test_framework)', { failOnStatusCode: false })

        // Ensure the page is fully loaded
        cy.get('body').should('be.visible')

        // Wait for the content text section to be visible
        cy.get('#mw-content-text').should('be.visible')
    })

    it('Using parents and children', function () {
        // Find the first paragraph within the content text section
        cy.get('#mw-content-text',{ timeout: 10000 }).find('p').first().then(($paragraph) => {
            // Ensure the paragraph contains at least one link
            cy.wrap($paragraph).children('a').should('have.length.at.least', 1)
        })
    })

    it('Using parent and children', function () {
        // Verify the first heading contains the expected text
        cy.get('#firstHeading',{timeout: 10000 }).should('be.visible').then(($heading) => {
            // Navigate to the parent of the heading and verify its children
            cy.wrap($heading).parent().children().should('contain', 'Cypress (test framework)')
        })
    })
})
