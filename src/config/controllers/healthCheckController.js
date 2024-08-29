const mongoose = require('mongoose');

exports.checkHealth = (req, res) => {
    res.status(200).json({ status: 'Healthy' });

    res.status(200).json({
        status: 'API is running',
        database: dbStatus
    });
};
