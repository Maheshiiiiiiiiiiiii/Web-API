const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    trainId: String,
    routeId: String,
    startTime: Date,
    endTime: Date,
    days: [String],
});

module.exports = mongoose.model('Schedule', scheduleSchema);
