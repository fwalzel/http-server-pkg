/**
 * pkg.js
 *
 * This is the entrypoint for the PKG executable
 */

// Require dependencies
const execSync = require('node:child_process').execSync;
const path = require('node:path');
const http = require('http-server');
const packageJson = require('./package.json');

// Inform that App is running
console.log(`Running App ${packageJson.name}. Version: ${packageJson.version}`);

// Specify the options for the server
const options = {
  // our project directory here is ./dist; change at will
  root: path.join(__dirname, 'dist'),
  // Port number; change at will
  port: 8080,
};

// Create the server
const server = http.createServer(options);

// Define the shell command to open Google Chrome programatically, depending on the OS we are on
// You can alter this to other browsers, by changing the strings of shellCommand
const shellCommand = process.platform === "win32"
  ? `start chrome http://localhost:${options.port}` // on Windows
  : `open -a "Google Chrome" http://localhost:${options.port}`; // on Mac

// Start the Server and open Chrome
server.listen(options.port, () => {
  execSync(shellCommand);
  console.log(`Server is running on http://localhost:${options.port}`);
  console.log(`If Chrome does not open the App automatically, use the above link to open it manually.`);
  console.log(`Do not close this terminal window as long as you run the App.`);
});