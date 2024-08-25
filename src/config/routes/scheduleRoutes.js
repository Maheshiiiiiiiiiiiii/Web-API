const express = require('express');
const router = express.Router();
const { createSchedule, getSchedule } = require('../controllers/ScheduleController');
const scheduleController = require('../controllers/ScheduleController');



// Create or Update Schedule
router.post('/schedule', scheduleController.updateSchedule);
// Fetch Schedule
router.get('/schedule/:train_id', scheduleController.fetchSchedules);

module.exports = router;

/*
router.post('/create', createSchedule);
router.get('/', getSchedule);
*/