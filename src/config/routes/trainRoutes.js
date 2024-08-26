const express = require('express');
const {
  receiveGPSData,
  fetchTrainData,
  fetchSpecificTrainData,
  fetchTrainLocationHistory,
  changeEngine,
  createTrain,
  getTrains,
  getTrainById,
  updateTrain,
  deleteTrain
} = require('../controllers/trainController'); // Ensure all functions are imported correctly
const protect = require('../middleware/auth');
const { verifyToken } = require('../utils/verifyToken');

const router = express.Router();

router.post('/:id/location', receiveGPSData); // post received data to my backend db

// API train details 
router.get('/data', fetchTrainData);
router.get('/data/:id', fetchSpecificTrainData);
router.get('/location-history/:id', fetchTrainLocationHistory);
router.post('/change-engine/:id', changeEngine); // remove

router.post('/:id/gps', protect, receiveGPSData);
router.get('/', protect, fetchTrainData);
router.get('/:id', protect, fetchSpecificTrainData);
router.get('/:id/history', protect, fetchTrainLocationHistory);
router.post('/:id/change-engine', protect, changeEngine);

/*router.post('/', verifyToken,()=>{}, createTrain);
router.get('/', verifyToken, getTrains);
router.get('/:id', verifyToken, getTrainById);
router.put('/:id', verifyToken, updateTrain);
router.delete('/:id', verifyToken, deleteTrain);*/

module.exports = router;