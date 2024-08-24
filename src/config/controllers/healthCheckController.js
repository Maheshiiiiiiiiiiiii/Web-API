const mongoose = require('mongoose');

const healthCheck = async (req, res) => {
    const dbState = mongoose.connection.readyState;
    const dbStatus = dbState === 1 ? 'connected' : 'disconnected';

    res.status(200).json({
        status: 'API is running',
        database: dbStatus
    });
};

module.exports = {
    healthCheck
};
