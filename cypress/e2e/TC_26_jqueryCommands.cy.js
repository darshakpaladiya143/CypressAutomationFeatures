describe('Enable and Disable Button using jQuery in Cypress', () => {

    before(() => {
        // Visit the Cypress example page with form elements
        cy.visit('https://example.cypress.io/commands/actions')
    })

    it('Enable and Disable a button using jQuery', () => {
        // Locate the button using its class
        cy.get('.action-btn').as('button')

        // Disable the button using jQuery
        cy.get('@button').then(($btn) => {
            $btn.prop('disabled', true)
        })

        // Verify the button is disabled
        cy.get('@button').should('be.disabled')

        // Enable the button using jQuery
        cy.get('@button').then(($btn) => {
            $btn.prop('disabled', false)
        })

        // Verify the button is enabled
        cy.get('@button').should('not.be.disabled')
    })

})
