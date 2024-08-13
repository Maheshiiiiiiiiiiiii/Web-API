const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    trainId: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    status: { type: String, required: true },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
