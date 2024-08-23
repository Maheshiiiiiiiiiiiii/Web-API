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

module.exports = router;
