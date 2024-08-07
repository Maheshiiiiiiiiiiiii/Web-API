const mongoose = require('mongoose');

const ScheduleSchema = new mongoose.Schema({
    trainId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Train',
        required: true,
    },
    departureTime: {
        type: Date,
        required: true,
    },
    arrivalTime: {
        type: Date,
        required: true,
    },
    days: {
        type: [String],
        enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        required: true,
    },
    date: {
        type: Date,
        required: false,
    },
});

module.exports = mongoose.model('Schedule', ScheduleSchema);
