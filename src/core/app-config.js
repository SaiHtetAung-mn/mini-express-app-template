const path = require("path");
const winston = require("winston");
const DailyRotate = require("winston-daily-rotate-file");

module.exports = function() {
    // set root path for global use
    global.__approot = path.resolve(__dirname, "../");
    global.__view = path.resolve(__dirname, "../views");
    global.__asset = path.resolve(__dirname, "../../public");

    // Log for global use
    const transport = new DailyRotate({
        filename: `src/logs/express-%DATE%.log`,
        datePattern: `YYYY:MM:DD`,
        zippedArchive: true,
        maxSize: `20m`,
        maxFiles: `14d`,
        prepend: true,
        level: 'info'
    })

    global.Log = winston.createLogger({
        format: winston.format.combine(
            winston.format.colorize({ all: false }),
            winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
            winston.format.printf(info => `[${info.timestamp}] [${info.level}]: ${info.message}`)
        ),
        transports: transport,
    })
}