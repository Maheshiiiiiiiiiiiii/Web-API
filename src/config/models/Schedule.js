const mongoose = require('mongoose');

const scheduleSchema = new mongoose.Schema({
  train_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Train', required: true },
  date: { type: Date, required: true },
  day: { type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'], required: true },
  type: { type: String, enum: ['Daily', 'Weekdays', 'Weekend', 'Special'], required: true },
  start_time: { type: String, required: true },
  end_time: { type: String, required: true },
});

module.exports = mongoose.model('Schedule', scheduleSchema);
