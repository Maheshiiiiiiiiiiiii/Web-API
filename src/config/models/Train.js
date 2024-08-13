const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
    engineId: { type: mongoose.Schema.Types.ObjectId, ref: 'Engine', required: true },
    routeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    status: { type: String, required: true },
});

module.exports = mongoose.model('Train', TrainSchema);
