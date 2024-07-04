describe('Mocking API Responses with JSONPlaceholder', () => {
    it('should mock API responses', () => {
      // Mock response for fetching users
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users', {
        statusCode: 200,
        body: [
          {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz'
          }
          // Add more mock users as needed
        ]
      }).as('getUsers');
  
      // Mock response for fetching posts for a specific user
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/users/1/posts', {
        statusCode: 200,
        body: [
          {
            userId: 1,
            id: 1,
            title: 'Post 1 Title',
            body: 'Post 1 body content'
          }
          // Add more mock posts as needed
        ]
      }).as('getPosts');
  
      // Mock response for fetching comments for a specific post
      cy.intercept('GET', 'https://jsonplaceholder.typicode.com/posts/1/comments', {
        statusCode: 200,
        body: [
          {
            postId: 1,
            id: 1,
            name: 'Commenter 1',
            email: 'commenter1@example.com',
            body: 'Comment 1 body content'
          }
          // Add more mock comments as needed
        ]
      }).as('getComments');
  
      // Make a request to fetch users
      cy.request('GET', 'https://jsonplaceholder.typicode.com/users').then((usersResponse) => {
        // Assert that the request was successful
        expect(usersResponse.status).to.eq(200);
        cy.log('Users:', usersResponse.body);
  
        // Get the ID of the first user
        const userId = usersResponse.body[0].id;
  
        // Make a request to fetch posts for the first user
        cy.request('GET', `https://jsonplaceholder.typicode.com/users/${userId}/posts`).then((postsResponse) => {
          // Assert that the request was successful
          expect(postsResponse.status).to.eq(200);
          cy.log('Posts:', postsResponse.body);
  
          // Get the ID of the first post
          const postId = postsResponse.body[0].id;
  
          // Make a request to fetch comments for the first post
          cy.request('GET', `https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then((commentsResponse) => {
            // Assert that the request was successful
            expect(commentsResponse.status).to.eq(200);
            cy.log('Comments:', commentsResponse.body);
  
            // Example assertion: Ensure there are comments for the post
            expect(commentsResponse.body.length).to.be.greaterThan(0);
          });
        });
      });
    });
  });
  