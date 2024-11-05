const watcher = require('./watcher');

// Function to start watching
function startWatching(command, directory) {
    console.log(`Watching for changes in ${directory}...`);
    watcher.watchDirectory(command, directory);
    console.log(`Command to fexecute: ${command}`);
}

module.exports = {
    startWatching
};