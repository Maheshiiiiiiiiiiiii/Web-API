const express = require('express');
const { getSchedules, addSchedule } = require('../controllers/ScheduleController');
const router = express.Router();

router.get('/', getSchedules);
router.post('/', addSchedule);

module.exports = router;
