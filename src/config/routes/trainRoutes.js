const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');

router.post('/:id/locations', trainController.receiveGPSData);
router.get('/', trainController.fetchTrainData);
router.get('/:id', trainController.fetchSpecificTrainData);
router.get('/:id/locations', trainController.fetchTrainLocationHistory);
router.post('/:id/change-engine', trainController.changeEngine);

module.exports = router;
