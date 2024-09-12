const mongoose = require('mongoose');

const lostFoundSchema = new mongoose.Schema({
    itemType: { type: String, required: true },
    description: { type: String, required: true },
    contactInfo: { type: String, required: true },
    location: { type: String, required: true },
    dateReported: { type: Date, default: Date.now },
    status: { type: String, enum: ['lost', 'found'], required: true },
    approved: { type: Boolean, default: false }
});

module.exports = mongoose.model('LostFound', lostFoundSchema);
