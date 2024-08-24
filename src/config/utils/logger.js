const Log = require('../models/log.js');

function logger(level, message, meta = {}) {
    const log = new Log({ level, message, meta });
    log.save().catch(err => console.error('Failed to log message', err.message));
}
const { createLogger, format, transports } = require('winston');

const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.json()
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'logs/app.log' })
    ],
});

module.exports = logger;
