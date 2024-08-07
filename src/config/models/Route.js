const mongoose = require('mongoose');

const RouteSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    stops: [
        {
            station: {
                type: String,
                required: true,
            },
            arrivalTime: {
                type: Date,
                required: true,
            },
            departureTime: {
                type: Date,
                required: true,
            },
        },
    ],
});

module.exports = mongoose.model('Route', RouteSchema);
