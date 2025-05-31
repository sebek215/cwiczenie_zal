describe('My First Test Suite', () => { 
  it('My First Test Case', () => {
    cy.visit('/'); // Visit the Cypress example page
    cy.contains('h1', 'Hello World'); // Check if the h1 element contains 'Hello World'
  });
});

