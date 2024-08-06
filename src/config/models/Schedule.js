const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  train: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
  date: { type: Date, required: true },
  day: { type: String, required: true },
  frequency: { type: String, enum: ['daily', 'weekdays', 'weekends'], required: true },
  special: { type: Boolean, default: false }
});

const Schedule = mongoose.model('Schedule', scheduleSchema);

module.exports = Schedule;
