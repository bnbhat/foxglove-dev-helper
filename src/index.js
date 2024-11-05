// index.js
const watcher = require('./watcher');

// Function to start watching
function startWatching(directory) {
    console.log(`Watching for changes in ${directory}...`);
    watcher.setupWatcher(directory);
}

module.exports = {
    startWatching
};
