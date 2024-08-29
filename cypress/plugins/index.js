const fs = require('fs');
const path = require('path');
 
module.exports = (on, config) => {
  on('task', {
    log(message) {
      const logFilePath = path.join(__dirname, '..', '..', 'logs', 'cypress.log');
      fs.appendFileSync(logFilePath, `${new Date().toISOString()} - ${message}\n`);
      return null;
    }
  });
};