const express = require('express');
const { createAlert, getAllAlerts, getAlertById, updateAlert, deleteAlert } = require('../controllers/alertController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/', verifyToken, createAlert);
router.get('/', verifyToken, getAllAlerts);
router.get('/:id', verifyToken, getAlertById);
router.put('/:id', verifyToken, updateAlert);
router.delete('/:id', verifyToken, deleteAlert);

module.exports = router;
