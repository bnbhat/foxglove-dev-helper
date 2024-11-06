function setupLiveReload(url) {
    const socket = new WebSocket(url);

    socket.addEventListener('message', function (event) {
        if (event.data === 'reload') {
            window.location.reload();
        }
    });

    console.log("Live reload is set up at:", url);
}

export { setupLiveReload };