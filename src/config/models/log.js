const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
    endpoint: { type: String, required: true },
    method: { type: String, required: true },
    status: { type: String, required: true },
    responseTime: { type: Number, required: true },
});

module.exports = mongoose.model('Log', LogSchema);
