const BaseError = require(__approot+"/lib/baseError");
module.exports = function (req, res, next) {
    next(new BaseError("Not Found Error", 404, true, "Route not found"));
}