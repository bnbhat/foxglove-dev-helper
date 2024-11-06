function liveReload() {
    const source = new EventSource('http://localhost:3000/reload');  // URL where your server sends reload events
    source.onmessage = function(event) {
        if (event.data === 'reload') {
            window.location.reload();
        }
    };
    console.log("Live reload enabled.");
}

export default liveReload;
