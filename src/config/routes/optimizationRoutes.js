const express = require('express');
const router = express.Router();
const optimizationController = require('../controllers/optimizationController');
const verifyToken = require('../middleware/authMiddleware'); // Assuming you have an auth middleware

router.post('/', verifyToken, optimizationController.logOptimization);
router.get('/', verifyToken, optimizationController.getOptimizationLogs);

module.exports = router;
