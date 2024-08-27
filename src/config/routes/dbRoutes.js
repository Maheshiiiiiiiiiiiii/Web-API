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


module.exports = router;
