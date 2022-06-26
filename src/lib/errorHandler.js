module.exports = function(server) {
    process.on('uncaughtException', err => {
        handleUncaughtException(err, server);
    });

    process.on('unhandledRejection', err => {
        console.log(err.stack ?? err);
    });
}

function handleUncaughtException(err, server) {
    logError(err);
    if(server) {
        server.close(error => {
            if(err) {
                logError(error);
            }
            else {
                Log.info("Server closed successfully");
                console.info('Server closed successfully');
            }
            process.exit(1);
        });
    }
}

function logError(err) {
    if(err instanceof Error) {
        Log.error(err);
    }
    else {
        Log.error(err);
    }
}