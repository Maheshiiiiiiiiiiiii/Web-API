const express = require('express');
const { getLogs, logMessage } = require('../controllers/monitoringController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

// Apply verifyToken middleware to routes that require authentication
router.get('/', verifyToken, getLogs);
router.get('/logs', verifyToken, getLogs);
router.post('/logs', verifyToken, logMessage);

module.exports = router;
