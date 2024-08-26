const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const bestClicksController = require('../controllers/bestClicksController');
const verifyToken = require('../middlewares/verifyToken'); // Step 1: Import verifyToken middleware

router.post('/', verifyToken, upload.single('photo'), bestClicksController.createBestClick);
router.get('/', verifyToken, bestClicksController.getBestClicks);

module.exports = router;
