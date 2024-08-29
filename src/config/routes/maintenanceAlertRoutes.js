const express = require('express');
const maintenanceAlertController = require('../controllers/maintenanceAlertController');
const verifyToken = require('../middleware/verifyToken');

const router = express.Router();

router.post('/', verifyToken, maintenanceAlertController.createMaintenanceAlert);
router.get('/', verifyToken, maintenanceAlertController.getAllMaintenanceAlerts);
router.get('/:id', verifyToken, maintenanceAlertController.getMaintenanceAlertById);
router.put('/:id', verifyToken, maintenanceAlertController.updateMaintenanceAlert);
router.delete('/:id', verifyToken, maintenanceAlertController.deleteMaintenanceAlert);

module.exports = router;
