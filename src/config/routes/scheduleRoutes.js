const express = require('express');
const { createSchedule, getAllSchedules, getScheduleById } = require('../controllers/ScheduleController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, createSchedule);
router.get('/', verifyToken, getAllSchedules);
router.get('/:id', verifyToken, getScheduleById);

module.exports = router;
