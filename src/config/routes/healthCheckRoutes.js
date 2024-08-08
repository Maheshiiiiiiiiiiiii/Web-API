const express = require('express');
const { checkHealth } = require('../controllers/healthCheckController');
const router = express.Router();

router.get('/', checkHealth);

module.exports = router;
