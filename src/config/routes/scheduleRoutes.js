const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/ScheduleController');

router.post('/', scheduleController.createSchedule);
// router.get('/:id', scheduleController.getScheduleById);
router.put('/:id', scheduleController.updateSchedule);
router.delete('/:id',scheduleController.deleteSchedule);
router.get('/', scheduleController.getAllSchedules);
router.get('/schedule/:train_id', scheduleController.fetchSchedules);

module.exports = router;
