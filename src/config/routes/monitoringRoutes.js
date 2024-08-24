const express = require('express');
const { getLogs } = require('../controllers/monitoringController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

const { getLogs, logMessage } = require('../controllers/monitoringController');
router.get('/', verifyToken, getLogs);

router.get('/logs', getLogs);
router.post('/logs', logMessage);

module.exports = router;
