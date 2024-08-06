const mongoose = require('mongoose');

const trainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  current_engine: { type: String },
  engine_history: [{ type: String }],
  createdAt: { type: Date, default: Date.now }
});

const Train = mongoose.model('Train', trainSchema);

module.exports = Train;
