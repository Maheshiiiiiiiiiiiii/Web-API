const express = require('express');
const router = express.Router();
const { verifyToken } = require('../utils/verifyToken');
const { createTrain, getTrains, getTrainById, updateTrain, deleteTrain } = require('../controllers/trainController');

router.post('/', verifyToken, createTrain);
router.get('/', verifyToken, getTrains);
router.get('/:id', verifyToken, getTrainById);
router.put('/:id', verifyToken, updateTrain);
router.delete('/:id', verifyToken, deleteTrain);

module.exports = router;
