import TestFilters from '../support/filterTests.js'

TestFilters(['smoke'], () => {
    describe('Example to demonstrate API Mocking in Cypress using cy.intercept', () => {

        beforeEach(() => {
            // cy.visit('http://localhost:8080'); 
            cy.visit('http://localhost:8081',{failOnStatusCode: false})
        })

        it('should display posts fetched from API', () => {
            // Intercept the API request and mock the response
            cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts', {
                statusCode: 200,
                body: [
                    { id: 1, title: 'Mock Post 1' },
                    { id: 2, title: 'Mock Post 2' }
                ]
            }).as('getPosts');
    
            // Trigger the API request by clicking the button
            cy.get('button#fetch-posts').click();
    
            // Wait for the intercepted API request to complete
            cy.wait('@getPosts');

            // Validate the UI displays the mock data
            cy.get('#post-list').should('contain', 'Mock Post 1');
            cy.get('#post-list').should('contain', 'Mock Post 2');    
        })
    })
})
