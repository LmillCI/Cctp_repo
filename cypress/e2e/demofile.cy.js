describe('Visit Page Test', () => {
  it('should visit the Amazon website', () => {
    // Visit the Cypress website
    cy.visit('https://www.amazon.in/');
    cy.screenshot();
    cy.screenshot();
    // Assert that the URL is correct
    //cy.url().should('include', 'cypress.io');
   
    // Optionally, you can add more assertions or interactions here
  });
});
after(() => {
  cy.task('filterScreenshots');
});