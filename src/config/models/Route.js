const mongoose = require('mongoose');

const stopSchema = new mongoose.Schema({
    name: { type: String, required: true },
    arrivalTime: { type: String, required: true },
    departureTime: { type: String, required: true },
});

const routeSchema = new mongoose.Schema({
    name: { type: String, required: true },
    stops: [stopSchema],
    dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Route', routeSchema);
