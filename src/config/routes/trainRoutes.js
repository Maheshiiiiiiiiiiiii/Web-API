const express = require('express');
const { getAllTrains, createTrain } = require('../controllers/trainController');
const verifyToken = require('../utils/verifyToken');
const router = express.Router();

router.get('/', verifyToken, getAllTrains);
router.post('/', verifyToken, createTrain);

module.exports = router;
