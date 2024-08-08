const mongoose = require('mongoose');

const TrainSchema = new mongoose.Schema({
  train_id: { type: String, required: true, unique: true },
  current_engine: { type: String, required: true },
  engine_history: [{ type: String }],
});

module.exports = mongoose.model('Train', TrainSchema);
