const express = require('express');
const router = express.Router();
const { healthCheck } = require('../controllers/healthCheckController');

router.get('/', healthCheck);

module.exports = router;
