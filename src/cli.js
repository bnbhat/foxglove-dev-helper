// cli.js
#!/usr/bin/env node

const { startWatching } = require('./index');

// Parsing command line arguments
const args = process.argv.slice(2);
const directory = args[0] || '.';

if (args.length === 0) {
    console.log("Usage: foxglove-dev-helper <path-to-watch>");
    process.exit(1);
}

// Starting the watcher
startWatching(directory);
