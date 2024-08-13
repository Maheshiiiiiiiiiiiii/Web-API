const express = require('express');
const router = express.Router();
const { logActivity, getLogs } = require('../controllers/monitoringController');

router.post('/log', logActivity);
router.get('/logs', getLogs);

module.exports = router;
