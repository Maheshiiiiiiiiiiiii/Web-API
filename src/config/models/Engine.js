const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
    engineId: {
        type: String,
        required: true,
        unique: true,
    },
    type: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'active',
    },
});

module.exports = mongoose.model('Engine', engineSchema);
