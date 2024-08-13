const Log = require('../models/log.js');

async function logger(req, res, next) {
    const start = Date.now();
    res.on('finish', async () => {
        const log = new Log({
            endpoint: req.originalUrl,
            method: req.method,
            status: res.statusCode,
            responseTime: Date.now() - start,
        });
        await log.save();
    });
    next();
}

module.exports = logger;
