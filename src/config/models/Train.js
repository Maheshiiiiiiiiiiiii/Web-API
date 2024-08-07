const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    engines: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Engine',
    }],
});

module.exports = mongoose.model('Train', trainSchema);
