const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
const protect = require('../middleware/auth');
const { verifyToken } = require('../utils/verifyToken');
const { createTrain, getTrains, getTrainById, updateTrain, deleteTrain } = require('../controllers/trainController');

router.post('/:id/gps', protect, trainController.receiveGPSData);
router.get('/', protect, trainController.fetchTrainData);
router.get('/:id', protect, trainController.fetchSpecificTrainData);
router.get('/:id/history', protect, trainController.fetchTrainLocationHistory);
router.post('/:id/change-engine', protect, trainController.changeEngine);
router.post('/', verifyToken, createTrain);
router.get('/', verifyToken, getTrains);
router.get('/:id', verifyToken, getTrainById);
router.put('/:id', verifyToken, updateTrain);
router.delete('/:id', verifyToken, deleteTrain);

module.exports = router;
