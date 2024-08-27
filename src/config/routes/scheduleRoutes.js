const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/ScheduleController');
const { verifyToken } = require('../middleware/verifyToken'); // Ensure this path is correct

router.post('/', verifyToken, scheduleController.createSchedule);
router.put('/:id', verifyToken, scheduleController.updateSchedule);
router.delete('/:id', verifyToken, scheduleController.deleteSchedule);
router.get('/', verifyToken, scheduleController.getAllSchedules);
router.get('/schedule/:train_id', verifyToken, scheduleController.fetchSchedules);

module.exports = router;
