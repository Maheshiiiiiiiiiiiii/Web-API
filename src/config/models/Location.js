const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationSchema = new Schema({
    train: {
        type: Schema.Types.ObjectId,
        ref: 'Train',
        required: true
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Location', locationSchema);
