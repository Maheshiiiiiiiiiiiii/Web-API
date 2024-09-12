const Log = require("../models/log.js");
const logger = require("../utils/logger");

exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.find().sort({ timestamp: -1 }).limit(100);
    res.status(200).json(logs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.logMessage = async (req, res) => {
  try {
    const { level, message, meta } = req.body;
    console.log("log", req.body);
    const log = new Log({
      ...req.body,
    });
    await log.save();
    res.status(200).send("Log entry created");
  } catch (error) {
    res.status(500).send(error.message);
  }
};
