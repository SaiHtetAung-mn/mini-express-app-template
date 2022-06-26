const http = require("http");
const app = require("./app");

const uncaughtErrorHandler = require("./lib/errorHandler");

class Server {
    constructor() {
        this.PORT = process.env.PORT || 3000;
        this.server = http.createServer(app);
        this.handleUncaughtError();
    }

    handleUncaughtError() {
        uncaughtErrorHandler(this.server);
    }

    listen() {
        this.server.listen(this.PORT, () => {
            console.log(`Server running on PORT: ${this.PORT}`);
        });
    }
}

module.exports = new Server();