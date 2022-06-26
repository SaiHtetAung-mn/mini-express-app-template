const BaseError = require('../lib/baseError');

module.exports = function(err, req, res, next) {
    if(!err.is_operational) {
        console.log(err.stact ?? err);
    }
    if(err instanceof Error) {
        const status_code = err.status_code ?? 500;
        res.status(status_code).json({
            status: status_code, 
            error: {
                message: err.message
            }
        });
    }
    else {
        res.status(500).json({
            status: 500,
            error: {
                message: "Server error"
            }
        });
    }
}