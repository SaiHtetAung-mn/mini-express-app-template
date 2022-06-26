const config = require("./core/app-config");
config(); // This must be invoked before server initialize

const server = require("./server");
server.listen();