const Schedule = require("../models/Schedule");
const Train = require("../models/Train");
const Location = require("../models/Location");
const handleEngineChange = require("../utils/engineChangeHandler");
const networkRetryHandler = require("../utils/networkRetryHandler");
const { v4: uuidv4 } = require("uuid");

const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch schedules" });
  }
};

const getScheduleById = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(schedule);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch schedule" });
  }
};

const addSchedule = async (req, res) => {
  const { train_id, date, day, frequency, special } = req.body;

  try {
    const train = await Train.findById(train_id);
    if (!train) {
      return res.status(404).json({ error: "Train not found" });
    }

    const schedule = new Schedule({
      ...req.body,
    });
    console.log("schedule", schedule);

    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateSchedule = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const schedule = await Schedule.findByIdAndUpdate(id, updates, {
      new: true,
    });
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }
    res
      .status(200)
      .json({ message: "Schedule updated successfully", schedule });
  } catch (error) {
    res.status(500).json({ message: "Error updating schedule", error });
  }
};

const deleteSchedule = async (req, res) => {
  const { id } = req.params;

  try {
    const schedule = await Schedule.findByIdAndDelete(id);
    if (!schedule) {
      return res.status(404).json({ message: "Schedule not found" });
    }
    res.status(200).json({ message: "Schedule deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting schedule", error });
  }
};

const createSchedule = async (req, res) => {
  const { trainId, routeId, departureTime, arrivalTime, date, dayType } =
    req.body;

  try {
    const schedule = new Schedule({
      trainId,
      routeId,
      departureTime,
      arrivalTime,
      date,
      dayType,
    });
    await schedule.save();
    res
      .status(201)
      .json({ message: "Schedule created successfully", schedule });
  } catch (error) {
    res.status(500).json({ message: "Error creating schedule", error });
  }
};

const getAllSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(500).json({ message: "Error fetching schedules", error });
  }
};

module.exports = {
  getSchedules,
  getScheduleById,
  addSchedule,
  updateSchedule,
  deleteSchedule,
  createSchedule,
  getAllSchedules,
};

