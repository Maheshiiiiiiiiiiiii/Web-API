const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Engine', engineSchema);
