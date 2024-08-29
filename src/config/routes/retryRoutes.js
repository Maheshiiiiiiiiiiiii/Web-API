const express = require('express');
const router = express.Router();
const retryController = require('../controllers/retryController');
const verifyToken = require('../middleware/authMiddleware'); // Assuming you have an auth middleware

router.post('/', verifyToken, retryController.createRetryRecord);
router.put('/:operationId/status', verifyToken, retryController.updateRetryStatus);
router.put('/:operationId/increment', verifyToken, retryController.incrementRetryCount);

module.exports = router;
