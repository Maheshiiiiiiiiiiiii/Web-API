const express = require('express');
const { addEngine, updateEngine, getEngine, getAllEngines, deleteEngine } = require('../controllers/engineController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

// @route   POST /engines
// @desc    Add a new engine
// @access  Private
router.post('/', verifyToken, addEngine);

// @route   PUT /engines/:id
// @desc    Update an existing engine
// @access  Private
router.put('/:id', verifyToken, updateEngine);

// @route   GET /engines/:id
// @desc    Get an engine by ID
// @access  Private
router.get('/:id', verifyToken, getEngine);

// @route   GET /engines
// @desc    Get all engines
// @access  Private
router.get('/', verifyToken, getAllEngines);

// @route   DELETE /engines/:id
// @desc    Delete an engine by ID
// @access  Private
router.delete('/:id', verifyToken, deleteEngine);

module.exports = router;
