const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
    trainId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Train',
        required: true
    },
    routeId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Route',
        required: true
    },
    departureTime: {
        type: Date,
        required: true
    },
    arrivalTime: {
        type: Date,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    dayType: {
        type: String,
        enum: ['Daily', 'Weekday', 'Weekend', 'Special'],
        required: true
    }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
