const fs = require('fs');
 
fs.readFile('./cypress/screenshots/screenshot-details.json', 'utf8', (err, data) => {
   
 
    // Step 2: Parse the JSON data
    const jsonData = JSON.parse(data);
 
    const masterData = {
        data: [jsonData]
      };
 
      const jsonString = JSON.stringify(masterData, null, 2);
 
       
   
 
    // Step 3: Write the transformed data to another file
    fs.writeFile('./cypress/results/masterssinfo.json',jsonString, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log('Data successfully written to file');
    });
 
 
   
  });

