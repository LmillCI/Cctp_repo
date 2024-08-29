const fs = require('fs');
const path = require('path');

// Add the Base64 data
const screenshotsDir = './cypress/screenshots';
const outputFilePath = './cypress/screenshots/screenshots_base64.json';
const screenshotlogFilePath = './cypress/screenshots/screenshot-details.json';

const convertScreenshotsToBase64 = (dir) => {
    const items = fs.readdirSync(dir);
    const base64Screenshots = {};

    items.forEach(item => {
        const itemPath = path.join(dir, item);
        if (fs.lstatSync(itemPath).isDirectory()) {
            // Recursively process subdirectories
            Object.assign(base64Screenshots, convertScreenshotsToBase64(itemPath));
        } else if (fs.lstatSync(itemPath).isFile() && path.extname(item) === '.png') {
            const fileData = fs.readFileSync(itemPath, { encoding: 'base64' });
            base64Screenshots[item] = fileData; // Use the filename as the key
        }
    });

    return base64Screenshots;
};

const base64Screenshots = convertScreenshotsToBase64(screenshotsDir);
fs.writeFileSync(outputFilePath, JSON.stringify(base64Screenshots, null, 2));

console.log("Screenshots converted to base64 and saved to", outputFilePath);

// Read existing data from screenshots-details.json
let screenshotsjson = {};
if (fs.existsSync(screenshotlogFilePath)) {
    try {
        const rawData = fs.readFileSync(screenshotlogFilePath, 'utf-8');
        screenshotsjson = JSON.parse(rawData);
    } catch (error) {
        console.error("Error reading or parsing screenshots-details.json:", error);
    }
} else {
    console.error("screenshots-details.json file does not exist.");
}

// Function to add base64 data to the logs
const addBase64ToLogs = (logs, base64Screenshots) => {
    for (const timestamp in logs) {
        const logEntry = logs[timestamp];
        const screenshotName = path.basename(logEntry.path);
        if (base64Screenshots[screenshotName]) {
            logEntry.base64 = base64Screenshots[screenshotName];
        }
    }
};

// Add the base64 data to the corresponding entries in screenshotsjson
addBase64ToLogs(screenshotsjson, base64Screenshots);

// Write the updated data back to screenshots-details.json
try {
    fs.writeFileSync(screenshotlogFilePath, JSON.stringify(screenshotsjson, null, 2));
    console.log("Base64 data added to", screenshotlogFilePath);
} catch (error) {
    console.error("Error writing to screenshots-details.json:", error);
}
