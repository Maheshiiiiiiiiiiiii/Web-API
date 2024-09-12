const mongoose = require("mongoose");

const MaintenanceAlertSchema = new mongoose.Schema({
  trainId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Train",
    required: true,
  },
  alertType: {
    type: String,
    required: true,
    enum: ["Engine Issue", "Track Issue", "Weather", "Other"],
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
    enum: ["Pending", "In Progress", "Resolved"],
    default: "Pending",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

MaintenanceAlertSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model("MaintenanceAlert", MaintenanceAlertSchema);
