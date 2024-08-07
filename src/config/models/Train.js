const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainSchema = new Schema({
    train_id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    engines: [{
        engine_id: String,
        iot_device_id: String
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Train', trainSchema);
