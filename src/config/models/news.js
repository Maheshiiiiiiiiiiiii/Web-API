const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    author: { type: String, required: true },
    date: { type: Date, required: true } // Added date field as per the form
});

module.exports = mongoose.model('News', newsSchema);