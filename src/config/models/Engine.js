const mongoose = require('mongoose');

const engineSchema = new mongoose.Schema({
    engine_id: {
        type: String,
        required: true,
        unique: true
    },
    train_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Train',
        required: true
    }
});

module.exports = mongoose.model('Engine', engineSchema);
