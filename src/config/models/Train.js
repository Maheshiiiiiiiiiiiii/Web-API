const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    engineId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Engine',
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model('Train', trainSchema);
