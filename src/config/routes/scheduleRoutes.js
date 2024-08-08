const express = require('express');
const { addSchedule, getSchedules } = require('../controllers/ScheduleController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/schedules', verifyToken, addSchedule);
router.get('/schedules', verifyToken, getSchedules);

module.exports = router;
