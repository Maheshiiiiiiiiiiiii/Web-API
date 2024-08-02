const express = require('express');
const router = express.Router();
const trainController = require('../controllers/trainController');
const protect = require('../middleware/authMiddleware');

router.post('/:id/gps', protect, trainController.receiveGPSData);
router.get('/', protect, trainController.fetchTrainData);
router.get('/:id', protect, trainController.fetchSpecificTrainData);
router.get('/:id/history', protect, trainController.fetchTrainLocationHistory);
router.post('/:id/change-engine', protect, trainController.changeEngine);

module.exports = router;
