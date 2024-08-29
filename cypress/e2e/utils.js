export function getScreenshotDetails(test) {

  const suiteName = test.parent.title || 'unknown-suite';
  const testName = test.title || 'unknown-test';
 //const screenshotFileName = test.screenshotFileName ;
  const testSteps = test.title || 'unknown-test';
  
  const fileName = `${suiteName}-${testName}.png`;

  return { suiteName, testName,testSteps, fileName };
}
