class BaseError extends Error {
    constructor(name, status_code, is_operational, message) {
        super(message);
        this.name = name;
        this.status_code = status_code;
        this.is_operational = is_operational;
        this.message = message;
        Error.captureStackTrace(this);
    }
}

module.exports = BaseError;