const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    name: { type: String, required: true },
    route: { type: mongoose.Schema.Types.ObjectId, ref: 'Route', required: true },
    engines: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Engine' }],
    // Add indexing for faster search
    status: { type: String, enum: ['active', 'inactive'], index: true },
});

trainSchema.index({ route: 1 });

module.exports = mongoose.model('Train', trainSchema);
