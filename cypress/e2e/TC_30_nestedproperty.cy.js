describe('API Testing with Nested Objects in Cypress', () => {

    it('GET request and assert nested values', () => {
      cy.request('GET', 'https://randomuser.me/api/')
        .then((response) => {
          // Log the entire response to the browser's console
          console.log(response);
  
          // Ensure response body contains the 'results' array
          const resultsArray = response.body.results;

          console.log(resultsArray)
  
          if (Array.isArray(resultsArray)) {
            const firstResult = resultsArray[0];
  
            // Assertions to validate the nested properties
            // expect(firstResult).to.have.property('gender', 'male');
            // expect(firstResult.name).to.have.property('first', 'Martín');
            // expect(firstResult.location).to.have.property('country', 'Mexico');
            // expect(firstResult).to.have.property('email', 'martin.carrasco@example.com');
            
            // Additional nested properties
            // expect(firstResult.login).to.have.property('username', 'redfrog651');
            // expect(firstResult.dob).to.have.property('age', 41);
  
            // Print values to the Cypress Command Log
            cy.log(`Country: ${firstResult.location.country}`);
            cy.log(`First Name: ${firstResult.name.first}`);
            cy.log(`Email: ${firstResult.email}`);
            
            // Print values to the browser's console
            console.log(`Country: ${firstResult.location.country}`);
            console.log(`First Name: ${firstResult.name.first}`);
            console.log(`Email: ${firstResult.email}`);
          } else {
            // Handle case where 'results' is not an array
            console.error('Expected an array but got:', resultsArray);
          }
          // Assertions to validate the response
          expect(response.status).to.eq(200);
          expect(resultsArray).to.be.an('array').that.is.not.empty;
        });
    });
  
  });
  