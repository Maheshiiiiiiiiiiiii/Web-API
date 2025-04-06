const Schedule = require("../models/Schedule");
const Train = require("../models/Train");
const Location = require("../models/Location");
const handleEngineChange = require("../utils/engineChangeHandler");
const networkRetryHandler = require("../utils/networkRetryHandler");
const { v4: uuidv4 } = require("uuid");

const getSchedules = async (req, res) => {
  try {
    const schedules = await Schedule.find().populate('train');
    res.status(200).json(schedules);
  } catch (error) {
    console.error('Error fetching schedules:', error);
    res.status(500).json({ error: 'Failed to fetch schedules', details: error.message });
  }
};

const getScheduleById = async (req, res) => {
  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id).populate('train');
    if (!schedule) {
      return res.status(404).json({ error: "Schedule not found" });
    }
    res.status(200).json(schedule);
  } catch (error) {
    console.error('Error fetching schedule:', error);
    res.status(500).json({ error: 'Failed to fetch schedule', details: error.message });
  }
};

const addSchedule = async (req, res) => {
  try {
    const { train_id, route, departureTime, arrivalTime, date, day, frequency, special } = req.body;

    // Validate required fields
    if (!train_id || !route || !departureTime || !arrivalTime || !date || !day || !frequency) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const schedule = new Schedule({
      train_id,
      route,
      departureTime: new Date(departureTime),
      arrivalTime: new Date(arrivalTime),
      date: new Date(date),
      day,
      frequency,
      special: special || false
    });

    await schedule.save();
    res.status(201).json(schedule);
  } catch (error) {
    console.error('Error creating schedule:', error);
    res.status(500).json({ error: 'Failed to create schedule', details: error.message });
  }
};

const updateSchedule = async (req, res) => {
  const { train_id, route, departureTime, arrivalTime, date, day, frequency, special } = req.body;

  const { id } = req.params;
  try {
    const schedule = await Schedule.findById(id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }

    // Update fields if provided
    if (train_id) schedule.train_id = train_id;
    if (route) schedule.route = route;
    if (departureTime) schedule.departureTime = new Date(departureTime);
    if (arrivalTime) schedule.arrivalTime = new Date(arrivalTime);
    if (date) schedule.date = new Date(date);
    if (day) schedule.day = day;
    if (frequency) schedule.frequency = frequency;
    if (special !== undefined) schedule.special = special;

    await schedule.save();
    res.status(200).json(schedule);
  } catch (error) {
    console.error('Error updating schedule:', error);
    res.status(500).json({ error: 'Failed to update schedule', details: error.message });
  }
};

const deleteSchedule = async (req, res) => {
  const { id } = req.params;

  try {
    const schedule = await Schedule.findByIdAndDelete(id);
    if (!schedule) {
      return res.status(404).json({ error: 'Schedule not found' });
    }
    res.status(200).json({ message: 'Schedule deleted successfully' });
  } catch (error) {
    console.error('Error deleting schedule:', error);
    res.status(500).json({ error: 'Failed to delete schedule', details: error.message });
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

