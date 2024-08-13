const express = require('express');
const router = express.Router();
const { addTrain, getTrains } = require('../controllers/trainController');

router.post('/add', addTrain);
router.get('/list', getTrains);

module.exports = router;
