const mongoose = require('mongoose');

const routeSchema = new mongoose.Schema({
    name: String,
    startStation: String,
    endStation: String,
    stations: [String],
});

module.exports = mongoose.model('Route', routeSchema);
