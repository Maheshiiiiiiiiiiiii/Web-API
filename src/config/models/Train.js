const mongoose = require("mongoose");

const trainSchema = new mongoose.Schema({
  name: { type: String, required: true },
  primary_engine: { type: mongoose.Schema.Types.ObjectId, ref: "Engine" },
  secondary_engine: { type: mongoose.Schema.Types.ObjectId, ref: "Engine" },
  engine_history: [{ type: mongoose.Schema.Types.ObjectId, ref: "Engine" }],
  schedule: { type: mongoose.Schema.Types.ObjectId, ref: "Schedule" },
});

const Train = mongoose.model("Train", trainSchema);

module.exports = Train;

