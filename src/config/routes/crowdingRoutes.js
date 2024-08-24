const express = require('express');
const { addCrowdingInfo, getCrowdingInfo } = require('../controllers/crowdingController');
const verifyToken = require('../utils/verifyToken');

const router = express.Router();

router.post('/crowding', verifyToken, addCrowdingInfo);
router.get('/crowding/:trainId', verifyToken, getCrowdingInfo);

module.exports = router;
