const express = require('express');
const router = express.Router();
const { createSchedule, getSchedule } = require('../controllers/ScheduleController');
const scheduleController = require('../controllers/ScheduleController');

router.post('/create', createSchedule);
router.get('/', getSchedule);

// Create or Update Schedule
router.post('/schedule', scheduleController.createOrUpdateSchedule);
// Fetch Schedule
router.get('/schedule/:train_id', scheduleController.fetchSchedule);

module.exports = router;
