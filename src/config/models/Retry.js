const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const retrySchema = new Schema({
    operationId: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        enum: ['pending', 'success', 'failed'],
        default: 'pending',
    },
    retryCount: {
        type: Number,
        default: 0,
    },
    lastAttempt: {
        type: Date,
        default: Date.now,
    },
});

const Retry = mongoose.model('Retry', retrySchema);

module.exports = Retry;
