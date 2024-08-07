const express = require('express');
const trainController = require('../controllers/trainController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/', verifyToken, trainController.createTrain);
router.get('/', verifyToken, trainController.getAllTrains);
router.get('/:id', verifyToken, trainController.getTrainById);
router.get('/location/:trainId', verifyToken, trainController.getTrainLocation);

module.exports = router;
