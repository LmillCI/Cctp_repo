// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('logToFile', (message) => {
    cy.task('log', message);
  });
  // Cypress.Commands.add('customScreenshot', (fileName) => {
  //   const screenshotPath = `cypress/screenshots/${fileName}.png`;
  //   cy.screenshot(screenshotPath, { capture: 'fullPage' });
  // });
  
  
  const fs = require('fs');
  const path = require('path');
// cypress/support/commands.js
Cypress.Commands.add('saveScreenshotInfo', function(screenshotName) {
  const suiteName = this.test.parent.title;
  const testName = this.test.title;
  const fileName = path.basename(__filename);
  cy.task('saveScreenshotInfo', {
    screenshotName,
    suiteName,
    testName,
    fileName
  });
  
});
