import TestFilters from '../support/filterTests.js'

TestFilters([], () => {
    describe('Example to demonstrate API Chaining in Cypress', function () {

        it('should chain API requests', () => {
            // Step 1: Fetch a list of users
            cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((usersResponse) => {
              // Assert that the request was successful
              expect(usersResponse.status).to.eq(200);
        
              // Log the list of users
              cy.log('Users:', usersResponse.body);
        
              // Get the ID of the first user
              const userId = usersResponse.body[0].id;
              cy.log(userId);
        
              // Step 2: Fetch posts for the first user
              cy.request('GET', `https://jsonplaceholder.typicode.com/users/${userId}/posts`).then((postsResponse) => {
                // Assert that the request was successful
                expect(postsResponse.status).to.eq(200);
        
                // Log the list of posts
                cy.log('Posts:', postsResponse.body);
        
                // Get the ID of the first post
                const postId = postsResponse.body[0].id;
        
                // Step 3: Fetch comments for the first post
                cy.request('GET', `https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((commentsResponse) => {
                  // Assert that the request was successful
                  expect(commentsResponse.status).to.eq(200);
        
                  // Log the list of comments
                  cy.log('Comments:', commentsResponse.body);
        
                  // Example assertion: Ensure there are comments for the post
                  expect(commentsResponse.body.length).to.be.greaterThan(0);
                });
              });
            });
          });
 
    })
})