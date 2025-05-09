const mongoose = require('mongoose');

const networkReliabilitySchema = new mongoose.Schema({
    checkId: {
        type: String,
        required: true,
        unique: true
    },
    status: {
        type: String,
        enum: ['up', 'down', 'intermittent'],
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    },
    details: {
        type: String,
        required: false
    }
});

const NetworkReliability = mongoose.model('NetworkReliability', networkReliabilitySchema);

module.exports = NetworkReliability;
