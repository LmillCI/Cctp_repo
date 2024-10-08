const fs = require('fs');

fs.readFile('./cypress/results/detailCommandLogs/detailCommandLogs.json', 'utf8', (err, data) => {
    
  
    // Step 2: Parse the JSON data
    const jsonData = JSON.parse(data);

    const masterData = {
        data: [jsonData]
      };

      const jsonString = JSON.stringify(masterData, null, 2);


    
  
    // Step 3: Write the transformed data to another file
    fs.writeFile('./cypress/results/detailCommandLogs/master.json',jsonString, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err);
        return;
      }
      console.log('Data successfully written to file');
    });


    
  });


// const fs = require('fs');

// // Step 1: Read the New JSON File
// fs.readFile('./cypress/results/detailCommandLogs/detailCommandLogs.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading the file:', err);
//         return;
//     }

//     // Step 2: Parse the New JSON Data
//     const newJsonData = JSON.parse(data);

//     // Step 3: Read the Master JSON File
//     fs.readFile('./cypress/results/detailCommandLogs/master.json', 'utf8', (err, masterData) => {
//         if (err) {
//             console.error('Error reading the master file:', err);
//             return;
//         }

//         let masterJsonData;
//         try {
//             masterJsonData = JSON.parse(masterData);
//         } catch (parseErr) {
//             console.error('Error parsing the master JSON file:', parseErr);
//             return;
//         }

//         // Ensure masterData has a data array
//         if (!Array.isArray(masterJsonData.data)) {
//             masterJsonData.data = [];
//         }

//         // Step 4: Append the New Data to the Master Data
//         masterJsonData.data.push(newJsonData);

//         // Step 5: Save the Updated Master JSON File
//         fs.writeFile('./cypress/results/detailCommandLogs/master.json', JSON.stringify(masterJsonData, null, 2), 'utf8', (err) => {
//             if (err) {
//                 console.error('Error writing the master file:', err);
//                 return;
//             }
//             console.log('Master JSON file updated successfully!');
//         });
        
//     });
// });
