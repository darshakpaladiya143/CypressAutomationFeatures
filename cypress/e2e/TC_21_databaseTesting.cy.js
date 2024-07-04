describe('Example to Demonstrate SQL Database Testing in Cypress', () => {

    it('Create a Table', function () {
        cy.task('queryDb', "CREATE TABLE Persons (PersonID int, FirstName varchar(255), Address varchar(255), City varchar(255))")
          .then((result) => {
              expect(result.warningCount).to.equal(0); // Adjust assertion as needed
          });
    });

    it('Input Entries into the table', function () {
        cy.task('queryDb', `INSERT INTO Persons (PersonID, FirstName, Address, City) VALUES
        (1, 'John', 'House No. 01', 'Helsinki'),
        (2, 'Pam', 'House No. 02', 'Espoo'),
        (3, 'Dwight', 'House No. 03', 'Lapland'),
        (4, 'Michael', 'House No. 04', 'Vantaa')`)
          .then((result) => {
              expect(result.affectedRows).to.equal(4);
          });
    });

    it('Update an Entry into the table and verify', function () {
        cy.task('queryDb', `UPDATE Persons SET FirstName = 'Kevin' WHERE City='Vantaa'`)
          .then((result) => {
              expect(result.changedRows).to.equal(1);
              return cy.task('queryDb', `SELECT FirstName FROM Persons WHERE City='Vantaa'`);
          })
          .then((result) => {
              expect(result[0].FirstName).to.equal('Kevin');
          });
    });

    it('Verify that there is only one row where the city is Espoo', function () {
        cy.task('queryDb', `SELECT COUNT(*) as rowCount FROM Persons WHERE City='Espoo'`)
          .then((result) => {
              expect(result[0].rowCount).to.equal(1);
          });
    });

    it('Delete a Table and Verify', function () {
        cy.task('queryDb', `DROP TABLE Persons`)
          .then((result) => {
              expect(result.warningCount).to.equal(0); // Adjust assertion as needed
          });
    });
});
