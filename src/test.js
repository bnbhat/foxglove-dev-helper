import chokidar from 'chokidar';
import { exec } from 'child_process';

// Command to execute
const command = 'echo "Hello, World!"';

function runCommand(command) {
  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error(`Execution error: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    if (stderr) console.log(`stderr: ${stderr}`);
  });
}



//test
// Setup a single watcher with options
const watcher = chokidar.watch('.', {
  ignored: (path, stats) => stats?.isFile() && !path.endsWith('.js'), // Modify as needed
  persistent: true,
  ignoreInitial: false,
  awaitWriteFinish: {
    stabilityThreshold: 2000,
    pollInterval: 100
  }
});

// Log and command execution setup
watcher.on('all', (event, path) => {
  console.log(`${event} on ${path}`);
  if (event === 'change' || event === 'add') {
    runCommand(command);
  }
});

// Ready and error events
watcher.on('ready', () => console.log('Initial scan complete. Ready for changes'));
watcher.on('error', error => console.log(`Watcher error: ${error}`));

// Ensure the script does not exit
process.stdin.resume();



