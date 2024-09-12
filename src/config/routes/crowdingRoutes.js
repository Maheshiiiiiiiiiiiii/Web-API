const express = require('express');
const { createCrowdingInfo, getCrowdingInfo, approveCrowdingInfo, deleteCrowdingInfo } = require('../controllers/crowdingController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/crowding', verifyToken, createCrowdingInfo);
router.get('/crowding', verifyToken, getCrowdingInfo);
router.patch('/crowding/:id/approve', verifyToken, approveCrowdingInfo);
router.delete('/crowding/:id', verifyToken, deleteCrowdingInfo);

module.exports = router;
