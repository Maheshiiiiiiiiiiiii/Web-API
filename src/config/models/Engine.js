const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
    engineId: String,
    type: String,
    status: String,
});

module.exports = mongoose.model('Engine', engineSchema);
