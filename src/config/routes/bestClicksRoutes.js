const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');
const bestClicksController = require('../controllers/bestClicksController');
const verifyToken = require('../middleware/verifyToken'); 

router.post('/', verifyToken, upload.single('photo'), bestClicksController.createBestClick);
router.get('/', verifyToken, bestClicksController.getBestClicks);

module.exports = router;
