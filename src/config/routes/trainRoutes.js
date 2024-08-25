const express = require('express');
const {
  receiveGPSData,
  fetchTrainData,
  fetchSpecificTrainData,
  fetchTrainLocationHistory,
  changeEngine,
} = require('../controllers/trainController');

const router = express.Router();

router.post('/:id/location', receiveGPSData);//post resived data to my backend db

//API train details 
router.get('/data', fetchTrainData);
router.get('/data/:id', fetchSpecificTrainData);
router.get('/location-history/:id', fetchTrainLocationHistory);
router.post('/change-engine/:id', changeEngine);//remove


const trainController = require('../controllers/trainController');
const protect = require('../middleware/auth');
const { verifyToken } = require('../utils/verifyToken');
const { createTrain, getTrains, getTrainById, updateTrain, deleteTrain } = require('../controllers/trainController');

const trainController = require('../controllers/trainController');
const verifyToken = require('../utils/verifyToken');

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

router.post('/', verifyToken, trainController.createTrain);
router.get('/', verifyToken, trainController.getAllTrains);
router.get('/:id', verifyToken, trainController.getTrainById);
router.get('/location/:trainId', verifyToken, trainController.getTrainLocation);

module.exports = router;
