// index.js
const watcher = require('./watcher');
const { exec } = require('child_process');

const command = 'npm run local-install';

function ignoredPaths(path) {
    return /(^|[\/\\])\..|node_modules|dist|\.git/;
  }

function onFileChange(event, path) {
    exec(command, (error, stdout, stderr) => {
        if (error) {
          console.error(`Execution error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        if (stderr) console.log(`\x1b[31mstderr: ${stderr}\x1b[0m`);
      });
}

// Function to start watching
function startWatching(directory) {
    console.log(`Watching for changes in ${directory}...`);
    console.log("Ignore node_modules:", ignoredPaths().test('/node_modules'));  // Should be true
    console.log("Ignore src:", ignoredPaths().test('/src'));  // Should be false
    const ignore = ignoredPaths();
    watcher.setupWatcher(directory, ignore, onFileChange);
}

module.exports = {
    startWatching
};
