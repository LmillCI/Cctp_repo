
const jsonData = {
    "data": [
      {
        "2024-08-16T05:03:06.915Z": {
          "TestfileName": "Sampletest.cy.js",
          "Screenshotname": "Sample suite -- TestCase1-  verify title-negative test (failed).png",
          "path": "C:\\Users\\2250658\\OneDrive - Cognizant\\Desktop\\Cypress AUTOMATION\\cypress\\screenshots\\Sampletest.cy.js\\Sample suite -- TestCase1-  verify title-negative test (failed).png",
          "takenAt": "2024-08-16T05:03:06.910Z"
        },
        "2024-08-16T05:03:13.770Z": {
          "TestfileName": "Sampletest.cy.js",
          "Screenshotname": "testcase2_screenshot.png",
          "path": "C:\\Users\\2250658\\OneDrive - Cognizant\\Desktop\\Cypress AUTOMATION\\cypress\\screenshots\\Sampletest.cy.js\\testcase2_screenshot.png",
          "takenAt": "2024-08-16T05:03:13.769Z"
        }
      },
      {
        "2024-08-16T05:05:21.646Z": {
          "TestfileName": "demofile.cy.js",
          "Screenshotname": "Visit Page Test -- should visit the Amazon website.png",
          "path": "C:\\Users\\2250658\\OneDrive - Cognizant\\Desktop\\Cypress AUTOMATION\\cypress\\screenshots\\demofile.cy.js\\Visit Page Test -- should visit the Amazon website.png",
          "takenAt": "2024-08-16T05:05:21.641Z"
        }
      }
    ]
}

const dataArray = jsonData.data;
 
//Iterate over the data array
for (let i = 0; i < dataArray.length; i++) {
  const fileObject = dataArray[i];
  const fileName = Object.keys(fileObject)[0]; // Get the key of the current object
  const fileDetails = fileObject[fileName];
 
  console.log(`Index: ${i}`);
  console.log(`File Name: ${fileName}`);
  console.log('File Details:', fileDetails);
}
