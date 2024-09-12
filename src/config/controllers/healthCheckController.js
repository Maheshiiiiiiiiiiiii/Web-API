const mongoose = require("mongoose");

exports.checkHealth = async (req, res) => {
  try {
    const x = await HealthCheck.find();
    console.log("Health", x);

    // res.status(200).json({ status: "Healthy" });
    res.status(200).json({
      status: "API is running",
      database: dbStatus,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
