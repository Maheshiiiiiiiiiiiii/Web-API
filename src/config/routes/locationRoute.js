const express = require('express');
const locationController = require('../controllers/locationController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.get('/:trainId', verifyToken, locationController.getTrainLocation);

module.exports = router;
