describe('Example to Demonstrate Cypress Recorder by Deploy Sentinel', () => {

    it('User can search for a product, add to cart, and checkout', () => {
        // Visit the website
        cy.visit('http://books.toscrape.com/');

         // Click on the anchor tag with the text "Travel"
         cy.contains('a', 'Travel').click();

        // Optionally, assert the URL to ensure the navigation was successful
        cy.url().should('include', 'catalogue/category/books/travel_2/index.html');

        // Select a book from the search results
        cy.get('.product_pod').first().within(() => {
            cy.get('a').first().click();
        });

        // Add the book to the cart
        cy.get('button').contains('Add to basket').click();

})
})