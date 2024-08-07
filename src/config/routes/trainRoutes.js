const express = require('express');
const trainController = require('../controllers/trainController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.get('/', verifyToken, trainController.getTrains);
router.post('/', verifyToken, trainController.createTrain);
router.put('/:id', verifyToken, trainController.updateTrain);
router.delete('/:id', verifyToken, trainController.deleteTrain);

module.exports = router;
