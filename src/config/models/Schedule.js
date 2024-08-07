const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    train: {
        type: Schema.Types.ObjectId,
        ref: 'Train',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    start_time: {
        type: Date,
        required: true
    },
    end_time: {
        type: Date,
        required: true
    },
    stops: [{
        station: String,
        arrival_time: Date,
        departure_time: Date
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Schedule', scheduleSchema);
