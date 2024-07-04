import TestFilters from '../support/filterTests.js'
///<reference types ="cypress"/>
///<reference types ="cypress-iframe"/>

TestFilters([], () => {
    describe('Test to demonstrate testing of iframes in Cypress', () => {
        before(() => {
            cy.visit('https://the-internet.herokuapp.com/iframe')
        })

        it('Input text in the text editor which is inside an iframe', () => {
            // Load the iframe content using its ID
        cy.frameLoaded("#mce_0_ifr", { timeout: 30000 }); // Increase timeout if necessary
        
        // Close any pop-up notifications
        cy.get(".tox-notification__dismiss.tox-button.tox-button--naked.tox-button--icon").click();

        // Wait for and interact with elements inside the iframe
        cy.iframe('#mce_0_ifr').within(() => {
            cy.get('p', { timeout: 30000 }).should('contain.text', 'Your content goes here.')
           


                })
            })
        })
    
    })
