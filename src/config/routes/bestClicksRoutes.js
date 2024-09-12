const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const bestClicksController = require('../controllers/bestClicksController');
const verifyToken = require('../middleware/verifyToken');

// Set up multer for file uploads
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, 'uploads/');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname));
	}
});
const upload = multer({ storage: storage });

// Define routes
router.post('/', verifyToken, upload.single('photo'), bestClicksController.uploadBestClick);
router.get('/', verifyToken, bestClicksController.getBestClickPhotos);
router.post('/approve', verifyToken, bestClicksController.approvePhoto);
router.post('/delete', verifyToken, bestClicksController.deletePhoto);

module.exports = router;
