describe('Cypress Commands Example: filter, find, and within', () => {

    beforeEach(() => {
        // Visit the Cypress example page
        cy.visit('https://example.cypress.io/commands/querying')
    })

    it('Using filter to find specific elements', () => {
        // Find all buttons and filter those with class 'query-btn'
        cy.get('button').filter('.query-btn').should('have.length', 1)
    })

    it('Using find to search within a specific element', () => {
        // Find the element with class 'query-form' and then search within it for 'input' elements
        cy.get('.query-form').find('input').should('have.length', 2)
    })

    it('Using within to limit the scope of commands', () => {
        // Limit scope to the element with class 'query-form'
        cy.get('.query-form').within(() => {
            // Search within the 'query-form' element for 'input' elements
            cy.get('input').should('have.length', 2)
        })
    })
})