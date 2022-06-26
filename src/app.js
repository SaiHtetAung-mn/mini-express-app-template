const express = require("express");

//Middleware declaration
const logger = require("./middlewares/logger.middleware");
const errorHandler = require("./middlewares/error.middleware");

// Routers declaration
const apiRouter = require("./routers/apiRouter");
const webRouter = require("./routers/webRouter");

class App {
    constructor() {
        this.app = express();
        this.initialize();
        return this.app;
    }

    initialize() {
        // Must invoke in this order 
        this.configGlobalMiddleware();
        this.configRoute();
        this.configErrorHandler();
    }

    configGlobalMiddleware() {
        this.app.use(logger); // this must be set at very first
        this.app.use(express.static(__asset)); 
        this.app.use(express.json()); 
        this.app.use(express.urlencoded({extended: true})); 
    }

    configRoute() {
        this.app.use("/api", apiRouter);
        this.app.use("/", webRouter);
    }

    // handle next(err) invoke
    configErrorHandler() {
        this.app.use(errorHandler);
    }
}

module.exports = new App();
