const express = require('express');
const {
  getTrainById,
  updateTrain,
  deleteTrain,
  createTrain,
  getTrains,
  receiveGPSData,
  fetchTrainData,
  fetchSpecificTrainData,
  fetchTrainLocationHistory,
  changeEngine
} = require('../controllers/trainController'); // Ensure all functions are imported correctly
//const protect = require('../middleware/auth');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/:id/location', verifyToken, receiveGPSData); // post received data to my backend db

// API train details 
router.get('/data', verifyToken, fetchTrainData);//ok
router.get('/data/:id', verifyToken, fetchSpecificTrainData);//ok
router.get('/location-history/:id', verifyToken, fetchTrainLocationHistory);//ok
router.post('/change-engine/:id', verifyToken, changeEngine); // remove

// Uncommented routes with verifyToken middleware
router.post('/', verifyToken, createTrain);
router.get('/', verifyToken, getTrains);
router.get('/:id', verifyToken, getTrainById);
router.put('/:id', verifyToken, updateTrain);
router.delete('/:id', verifyToken, deleteTrain);

module.exports = router;