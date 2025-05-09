const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const routeSchema = new Schema({
    route_id: {
        type: String,
        required: true,
        unique: true
    },
    start_location: {
        type: String,
        required: true
    },
    end_location: {
        type: String,
        required: true
    },
    stops: [{
        station: String,
        arrival_time: Date,
        departure_time: Date
    }],
    trains: [{
        type: Schema.Types.ObjectId,
        ref: 'Train'
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Route', routeSchema);
