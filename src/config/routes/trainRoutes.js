const express = require('express');
const { getTrains, getTrainById, createTrain, updateTrain, deleteTrain } = require('../controllers/trainController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

// Get all trains
router.get('/', verifyToken, getTrains);

// Get a single train by ID
router.get('/:id', verifyToken, getTrainById);

// Create a new train
router.post('/', verifyToken, createTrain);

// Update a train
router.put('/:id', verifyToken, updateTrain);

// Delete a train
router.delete('/:id', verifyToken, deleteTrain);

module.exports = router;
