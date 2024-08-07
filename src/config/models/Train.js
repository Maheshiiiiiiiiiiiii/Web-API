const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    engines: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Engine',
            required: true,
        },
    ],
    lastKnownLocation: {
        type: {
            latitude: Number,
            longitude: Number,
        },
        required: false,
    },
});

module.exports = mongoose.model('Train', TrainSchema);
