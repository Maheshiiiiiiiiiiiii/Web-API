const express = require('express');
const router = express.Router();
const { createSchedule, getSchedule } = require('../controllers/ScheduleController');

router.post('/create', createSchedule);
router.get('/', getSchedule);

module.exports = router;
