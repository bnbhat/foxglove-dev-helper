#!/usr/bin/env node

const { startWatching } = require('./index');

const args = process.argv.slice(2);

if (args.length > 0 && args[0] === 'watch') {
    //const command = 'foxglove-extension install';  // Default command to execute
    const command = 'echo "test-cmd exec" ';  // Test
    const directory = args[1] || './';  // Default directory to watch if none specified

    startWatching(command, directory);
} else {
    console.log("Usage: foxglove-dev-helper watch [directory]");
}
