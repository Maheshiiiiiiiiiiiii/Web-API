const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
    name: String,
    apiKey: String,
});

module.exports = mongoose.model('Client', clientSchema);
