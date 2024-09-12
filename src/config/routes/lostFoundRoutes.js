const express = require('express');
const router = express.Router();
const lostFoundController = require('../controllers/lostFoundController');
const verifyToken = require('../middleware/verifyToken');

router.post('/', verifyToken, lostFoundController.createLostFoundItem);
router.get('/', lostFoundController.getLostFoundItems);
router.get('/:id', lostFoundController.getLostFoundItem);
router.post('/approve/:id', verifyToken, lostFoundController.approveLostFoundItem);
router.delete('/:id', verifyToken, lostFoundController.deleteLostFoundItem);

module.exports = router;
