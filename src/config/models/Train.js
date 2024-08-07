const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
  train_id: { type: String, required: true, unique: true },
  current_engine: { type: String, required: true },
  engine_history: [{ type: String }],
    name: {
        type: String,
        required: true,
    },
    engines: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Engine',
            required: true,
        },
    ],
    lastKnownLocation: {
        type: {
            latitude: Number,
            longitude: Number,
        },
        required: false,
    },
});

module.exports = mongoose.model('Train', TrainSchema);
