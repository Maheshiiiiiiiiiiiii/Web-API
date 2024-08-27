const express = require('express');
const { checkHealth } = require('../controllers/healthCheckController');
const router = express.Router();

const { healthCheck } = require('../controllers/healthCheckController');

router.get('/', verifyToken, checkHealth);

router.get('/', healthCheck);

module.exports = router;
