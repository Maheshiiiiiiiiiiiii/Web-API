const express = require('express');
const { getTrains, addTrain } = require('../controllers/trainController');
const router = express.Router();

router.get('/', getTrains);
router.post('/', addTrain);

module.exports = router;
