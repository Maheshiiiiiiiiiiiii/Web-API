const mongoose = require('mongoose');

const EngineSchema = new mongoose.Schema({
    engineId: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
    lastKnownLocation: {
        type: {
            latitude: Number,
            longitude: Number,
        },
        required: false,
    },
});

module.exports = mongoose.model('Engine', EngineSchema);
