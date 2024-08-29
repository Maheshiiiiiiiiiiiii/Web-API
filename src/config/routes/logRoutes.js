const express = require('express');
const router = express.Router();
const logController = require('../controllers/logController');

// Create a new log entry
router.post('/', logController.createLog);

// Get all log entries
router.get('/', logController.getLogs);

// Get a single log entry by ID
router.get('/:id', logController.getLogById);

// Delete a log entry by ID
router.delete('/:id', logController.deleteLog);

module.exports = router;