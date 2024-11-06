// watcher.js
const chokidar = require('chokidar');


// Setting up the watcher with options
function setupWatcher(pathToWatch, ignoredPaths, onFileChange) {
    const watcher = chokidar.watch(pathToWatch, {
        ignored: ignoredPaths,
        persistent: true,
        ignoreInitial: true
    });

    const log = console.log.bind(console);

    watcher
        .on('add', path => log(`File ${path} has been added`))
        .on('change', path => {
            log(`File ${path} has been changed`);
            onFileChange(path);
        })
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
