const chokidar = require('chokidar');
const { exec } = require('child_process');

function watchDirectory(command, pathToWatch) {
    const watcher = chokidar.watch(pathToWatch, { ignored: /^\./, persistent: true });

    watcher.on('all', (event, path) => {
        console.log(`Event: ${event} on path: ${path}`);
        execCommand(command);
    });

    function execCommand(cmd) {
        console.log(`Executing command: ${cmd}`);
        exec(cmd, (error, stdout, stderr) => {
            if (error) {
                console.error(`Error executing command: ${error}`);
                return;
            }
            if (stderr) {
                console.error(`Command error output: ${stderr}`);
            }
            console.log(`Command output: ${stdout}`);
        });
    }

    // Keep the process alive
    process.stdin.resume();
}

module.exports = {
    watchDirectory
};
