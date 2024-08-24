const express = require('express');
const router = express.Router();
const upload = require('../middlewares/upload');
const bestClicksController = require('../controllers/bestClicksController');

router.post('/', upload.single('photo'), bestClicksController.createBestClick);
router.get('/', bestClicksController.getBestClicks);

module.exports = router;
