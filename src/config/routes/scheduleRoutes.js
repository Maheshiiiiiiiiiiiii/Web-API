const express = require('express');
const { getAllSchedules, createSchedule } = require('../controllers/ScheduleController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.get('/', verifyToken, getAllSchedules);
router.post('/', verifyToken, createSchedule);

module.exports = router;
