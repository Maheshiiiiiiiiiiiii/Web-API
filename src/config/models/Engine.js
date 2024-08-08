const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
    engineId: { type: String, required: true, unique: true },
    type: { type: String, required: true },
    status: { type: String, required: true, enum: ['active', 'inactive'] },
}, { timestamps: true });

module.exports = mongoose.model('Engine', engineSchema);
