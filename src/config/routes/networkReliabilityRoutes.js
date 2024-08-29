const express = require('express');
const router = express.Router();
const verifyToken = require('../middlewares/verifyToken');
const networkReliabilityController = require('../controllers/networkReliabilityController');


router.post('/', verifyToken, networkReliabilityController.createNetworkReliability);
router.get('/', verifyToken, networkReliabilityController.getAllNetworkReliabilities);
router.get('/:id', verifyToken, networkReliabilityController.getNetworkReliabilityById);
router.put('/:id', verifyToken, networkReliabilityController.updateNetworkReliability);
router.delete('/:id', verifyToken, networkReliabilityController.deleteNetworkReliability);

module.exports = router;
