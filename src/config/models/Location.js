const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    trainId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Train',
        required: true,
    },
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Location', locationSchema);
