const mongoose = require('mongoose');

const bestClickSchema = new mongoose.Schema({
    route: {
        type: String,
        required: true,
    },
    place: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
    photo: {
        type: String, // This will store the file path of the uploaded photo
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('BestClick', bestClickSchema);
