const express = require('express');
const router = express.Router();
const { addSchedule, getSchedules } = require('../controllers/ScheduleController');

router.post('/add', addSchedule);
router.get('/list', getSchedules);

module.exports = router;
