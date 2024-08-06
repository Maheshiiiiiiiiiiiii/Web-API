const express = require('express');
const router = express.Router();
const { createTrain, getTrains } = require('../controllers/trainController');

router.post('/create', createTrain);
router.get('/', getTrains);

module.exports = router;
