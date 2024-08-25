const express = require('express');
const router = express.Router();
const { createSchedule, getSchedule } = require('../controllers/ScheduleController');
const scheduleController = require('../controllers/ScheduleController');



// Create or Update Schedule
router.post('/schedule', scheduleController.updateSchedule);
// Fetch Schedule
router.get('/schedule/:train_id', scheduleController.fetchSchedules);

module.exports = router;

/*
router.post('/create', createSchedule);
router.get('/', getSchedule);
*/
const { verifyToken } = require('../utils/verifyToken');
const { createSchedule, getSchedules, getScheduleById, updateSchedule, deleteSchedule } = require('../controllers/ScheduleController');

const scheduleController = require('../controllers/ScheduleController');
const verifyToken = require('../utils/verifyToken');

router.post('/', verifyToken, createSchedule);
router.get('/', verifyToken, getSchedules);
router.get('/:id', verifyToken, getScheduleById);
router.put('/:id', verifyToken, updateSchedule);
router.delete('/:id', verifyToken, deleteSchedule);

router.post('/', verifyToken, scheduleController.createSchedule);
router.get('/', verifyToken, scheduleController.getAllSchedules);
router.get('/:id', verifyToken, scheduleController.getScheduleById);

module.exports = router;
