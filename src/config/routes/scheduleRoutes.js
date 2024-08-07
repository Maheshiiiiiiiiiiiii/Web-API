const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/verifyToken');
const { createSchedule, getSchedules, getScheduleById, updateSchedule, deleteSchedule } = require('../controllers/ScheduleController');

router.post('/', verifyToken, createSchedule);
router.get('/', verifyToken, getSchedules);
router.get('/:id', verifyToken, getScheduleById);
router.put('/:id', verifyToken, updateSchedule);
router.delete('/:id', verifyToken, deleteSchedule);

module.exports = router;
