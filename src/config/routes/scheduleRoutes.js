const express = require('express');
const { getSchedules, getScheduleById, createSchedule, updateSchedule, deleteSchedule } = require('../controllers/ScheduleController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

// Get all schedules
router.get('/', verifyToken, getSchedules);

// Get a single schedule by ID
router.get('/:id', verifyToken, getScheduleById);

// Create a new schedule
router.post('/', verifyToken, createSchedule);

// Update a schedule
router.put('/:id', verifyToken, updateSchedule);

// Delete a schedule
router.delete('/:id', verifyToken, deleteSchedule);

module.exports = router;
