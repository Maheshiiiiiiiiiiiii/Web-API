const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');
const verifyToken = require('../middleware/verifyToken');

router.get('/schedules', verifyToken, scheduleController.getSchedules);
router.get('/schedules/:id', verifyToken, scheduleController.getScheduleById);
router.post('/schedules', verifyToken, scheduleController.addSchedule);
router.put('/schedules/:id', verifyToken, scheduleController.updateSchedule);
router.delete('/schedules/:id', verifyToken, scheduleController.deleteSchedule);

module.exports = router;
