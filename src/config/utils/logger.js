const Log = require('../models/log.js');

function logger(level, message, meta = {}) {
    const log = new Log({ level, message, meta });
    log.save().catch(err => console.error('Failed to log message', err.message));
}

module.exports = logger;
