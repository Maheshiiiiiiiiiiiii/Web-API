const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    name: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: true },
    waypoints: [{ type: String }],
});

module.exports = mongoose.model('Route', RouteSchema);
