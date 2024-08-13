const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
    engineId: {
        type: String,
        required: true,
        unique: true,
    },
    status: {
        type: String,
        required: true,
    },
    lastServiceDate: {
        type: Date,
        required: true,
    },
});

module.exports = mongoose.model('Engine', engineSchema);
