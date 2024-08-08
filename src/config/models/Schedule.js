const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    time: { type: Date, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Schedule', scheduleSchema);
