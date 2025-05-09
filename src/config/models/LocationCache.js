const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const locationCacheSchema = new Schema({
    trainId: {
        type: Schema.Types.ObjectId,
        ref: 'Train',
        required: true,
    },
    cachedLocation: {
        type: {
            latitude: { type: Number, required: true },
            longitude: { type: Number, required: true },
        },
        required: true,
    },
    timestamp: {
        type: Date,
        default: Date.now,
    },
});

const LocationCache = mongoose.model('LocationCache', locationCacheSchema);

module.exports = LocationCache;
