const express = require('express');
const { healthCheck } = require('../controllers/healthCheckController');

const router = express.Router();

// Health Check Endpoint
router.get('/health', healthCheck);

module.exports = router;
