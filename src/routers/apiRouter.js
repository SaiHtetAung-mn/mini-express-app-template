const express = require("express");
const indexController = require("../controllers/api/index.api.controller");
const notFoundController = require("../controllers/api/404.api.controller");

const apiRouter = express.Router();

// Api route configuration goes here
apiRouter
.get("/", indexController);


// This must be invoked at last
apiRouter.all("*", notFoundController);

module.exports = apiRouter;