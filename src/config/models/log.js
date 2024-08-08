const mongoose = require('mongoose');

const logSchema = new mongoose.Schema({
    level: { type: String, required: true },
    message: { type: String, required: true },
    meta: { type: Object, default: {} },
}, { timestamps: true });

module.exports = mongoose.model('Log', logSchema);
