const express = require('express');
const { createTrain, getAllTrains, getTrainById, updateTrainLocation, getTrainLocation } = require('../controllers/trainController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, createTrain);
router.get('/', verifyToken, getAllTrains);
router.get('/:id', verifyToken, getTrainById);
router.post('/:trainId/location', verifyToken, updateTrainLocation);
router.get('/:trainId/location', verifyToken, getTrainLocation);

module.exports = router;
