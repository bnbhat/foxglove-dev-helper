// watcher.js
const chokidar = require('chokidar');

// Function to ignore node_modules, .git, and dotfiles
function ignoredPaths(path) {
  return /(^|[\/\\])\..|node_modules|\.git/.test(path);
}

// Setting up the watcher with options
function setupWatcher(pathToWatch) {
    const watcher = chokidar.watch(pathToWatch, {
        ignored: ignoredPaths,
        persistent: true,
        ignoreInitial: true
    });

    const log = console.log.bind(console);

    watcher
        .on('add', path => log(`File ${path} has been added`))
        .on('change', path => log(`File ${path} has been changed`))
        .on('unlink', path => log(`File ${path} has been removed`))
        .on('addDir', path => log(`Directory ${path} has been added`))
        .on('unlinkDir', path => log(`Directory ${path} has been removed`))
        .on('error', error => log(`Watcher error: ${error}`))
        .on('ready', () => log('Initial scan complete. Ready for changes'));

    watcher.on('ready', () => log('Currently watching:', watcher.getWatched()));
}

module.exports = {
    setupWatcher
};
