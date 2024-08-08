const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    trainId: String,
    name: String,
    engines: [String],
    routeId: String,
});

module.exports = mongoose.model('Train', trainSchema);
