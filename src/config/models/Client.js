const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    apiKey: { type: String, required: true },
    dateRegistered: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Client', clientSchema);
