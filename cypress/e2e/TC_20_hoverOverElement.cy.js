describe('Example to Demostrate how to hover over element in cypress', () => {

    it('Hover and Validate Text using trigger(\'mouseover\')', function () {
        cy.visit('https://www.amazon.com/')
        cy.get('[data-csa-c-content-id="nav_ya_signin"]').trigger('mouseover')
        cy.contains('Create a List').click()
        cy.url().should('include','wishlist/intro')
    })

    it('Hover and Validate Text using realHover()', function () {
        cy.visit('https://the-internet.herokuapp.com/hovers')
        cy.get('div:nth-child(3) > img').realHover('mouse')
        cy.get('div:nth-child(3) > div > h5').should('be.visible')
        cy.get('div:nth-child(4) > img').realHover('mouse')
        cy.get('div:nth-child(4) > div > h5').should('be.visible')
        cy.get('div:nth-child(5) > img').realHover('mouse')
        cy.get('div:nth-child(5) > div > h5').should('be.visible')
    })
})