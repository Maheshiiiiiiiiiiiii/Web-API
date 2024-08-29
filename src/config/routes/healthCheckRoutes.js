const express = require('express');
const { checkHealth } = require('../controllers/healthCheckController'); 
const verifyToken = require('../middleware/verifyToken'); 

const router = express.Router();

router.get('/', verifyToken, checkHealth);

module.exports = router;