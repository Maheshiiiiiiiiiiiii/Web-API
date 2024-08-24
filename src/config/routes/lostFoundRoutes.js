const express = require('express');
const router = express.Router();
const lostFoundController = require('../controllers/lostFoundController');
const verifyToken = require('../middlewares/verifyToken');

router.post('/', verifyToken, lostFoundController.createLostFound);
router.get('/', lostFoundController.getLostFoundItems);
router.get('/:id', lostFoundController.getLostFoundItem);

module.exports = router;
