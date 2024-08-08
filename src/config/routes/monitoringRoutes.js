const express = require('express');
const { getLogs, logMessage } = require('../controllers/monitoringController');
const router = express.Router();

router.get('/logs', getLogs);
router.post('/logs', logMessage);

module.exports = router;
