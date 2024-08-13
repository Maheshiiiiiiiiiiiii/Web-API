const mongoose = require('mongoose');

const EngineSchema = new mongoose.Schema({
    engineId: { type: String, required: true, unique: true },
    status: { type: String, required: true },
    assignedTrain: { type: mongoose.Schema.Types.ObjectId, ref: 'Train' },
});

module.exports = mongoose.model('Engine', EngineSchema);
