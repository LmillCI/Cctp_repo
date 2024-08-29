const fs = require('fs');
const path = require('path');

const base64FilePath = './cypress/screenshots/screenshots_base64.json';
const outputImagePath = './cypress/screenshots/decoded_image.png';

// Read the base64 JSON file
const base64Data = JSON.parse(fs.readFileSync(base64FilePath, 'utf8'));

// Pick the first base64 string (you can change the key to any specific image you want to test)
const firstImageKey = Object.keys(base64Data)[2];
const base64String = base64Data[firstImageKey];

// Decode the base64 string and save it as an image
const buffer = Buffer.from(base64String, 'base64');
fs.writeFileSync(outputImagePath, buffer);

console.log("Base64 string decoded and saved as image to", outputImagePath);
