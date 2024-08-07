const express = require('express');
const scheduleController = require('../controllers/ScheduleController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, scheduleController.createSchedule);
router.get('/', verifyToken, scheduleController.getAllSchedules);
router.get('/:id', verifyToken, scheduleController.getScheduleById);

module.exports = router;
