const express = require('express');
const { addTrain, getTrains } = require('../controllers/trainController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/trains', verifyToken, addTrain);
router.get('/trains', verifyToken, getTrains);

module.exports = router;
