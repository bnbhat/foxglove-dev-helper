#!/usr/bin/env node

const { startWatching } = require('./index');
const { setupLiveReload } = require('./reload');

// Parsing command line arguments
const args = process.argv.slice(2);

// Check if the 'watch' command is provided
if (args.length === 0 || args[0] !== 'watch') {
    console.log("Usage: foxglove-dev-helper watch <path-to-watch>");
    process.exit(1);
}

const command = args[0];
// Use the second argument as the directory or default to '.'
const directory = args[1] || '.';

// Call startWatching only if the command is 'watch'
if (command === 'watch') {
    console.log(`Starting to watch: ${directory}`);
    startWatching(directory);
    setupLiveReload('ws://localhost:8080');
} else {
    console.log("Invalid command. Use 'watch' to start watching a directory.");
    process.exit(1);
}