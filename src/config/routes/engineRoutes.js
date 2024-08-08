const express = require('express');
const { getEngines, getEngineById, createEngine, updateEngine, deleteEngine } = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

// Get all engines
router.get('/', verifyToken, getEngines);

// Get a single engine by ID
router.get('/:id', verifyToken, getEngineById);

// Create a new engine
router.post('/', verifyToken, createEngine);

// Update an engine
router.put('/:id', verifyToken, updateEngine);

// Delete an engine
router.delete('/:id', verifyToken, deleteEngine);

module.exports = router;
