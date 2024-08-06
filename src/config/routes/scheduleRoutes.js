const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/ScheduleController');

// Create or Update Schedule
router.post('/schedule', scheduleController.createOrUpdateSchedule);

// Fetch Schedule
router.get('/schedule/:train_id', scheduleController.fetchSchedule);

module.exports = router;
