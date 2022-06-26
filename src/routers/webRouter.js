const express = require("express");
const indexController = require("../controllers/web/index.web.controller");
const notFoundController = require("../controllers/web/404.web.controller");
const webRouter = express.Router();

// Web route configuration goes here
webRouter
.get("/", indexController);

// This must be invoked at last
webRouter.all("*", notFoundController); 

module.exports = webRouter;