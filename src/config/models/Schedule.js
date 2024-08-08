const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
  date: { type: Date, required: true },
  day: { type: String, required: true },
  time: { type: String, required: true },
  type: { type: String, required: true },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
