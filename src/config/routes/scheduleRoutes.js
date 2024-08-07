const express = require('express');
const scheduleController = require('../controllers/ScheduleController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/', verifyToken, scheduleController.getSchedules);
router.post('/', verifyToken, scheduleController.createSchedule);
router.put('/:id', verifyToken, scheduleController.updateSchedule);
router.delete('/:id', verifyToken, scheduleController.deleteSchedule);

module.exports = router;
