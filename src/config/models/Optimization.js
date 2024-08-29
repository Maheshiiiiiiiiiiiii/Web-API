const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optimizationSchema = new Schema({
    query: {
        type: String,
        required: true,
    },
    result: {
        type: Schema.Types.Mixed,
        required: true,
    },
    executionTime: {
        type: Number, // Time in milliseconds
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Optimization = mongoose.model('Optimization', optimizationSchema);

module.exports = Optimization;
