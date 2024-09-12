const BestClick = require('../models/BestClick'); 
const multer = require('multer');
const path = require('path');

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

// Fetch all best click photos
exports.getBestClickPhotos = async (req, res) => {
    try {
        const photos = await BestClick.find();
        res.json(photos);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching best click photos' });
    }
};

// Approve a photo
exports.approvePhoto = async (req, res) => {
    
    try {
        const { id } = req.body;
        const photo = await BestClick.findById(id);
        if (!photo) {
            return res.status(404).json({ error: 'Photo not found' });
        }
        photo.approved = true;
        await photo.save();
        res.json({ success: true, message: 'Photo approved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error approving photo' });
    }
};

// Delete a photo
exports.deletePhoto = async (req, res) => {
    try {
        const { id } = req.body;
        const photo = await BestClick.findById(id);
        if (!photo) {
            return res.status(404).json({ error: 'Photo not found' });
        }
        await photo.remove();
        res.json({ success: true, message: 'Photo deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Error deleting photo' });
    }
};

// Upload a new best click photo
exports.uploadBestClick = [
    upload.single('image'),
    async (req, res) => {
        try {
            const { trainName, date, time, place } = req.body;
            const imagePath = req.file.path;

            const newBestClick = new BestClick({
                imagePath: imagePath,
                trainName: trainName,
                date: date,
                time: time,
                place: place
            });

            await newBestClick.save();
            res.json({ success: true, message: 'Image uploaded successfully!', imagePath: imagePath });
        } catch (error) {
            res.status(500).json({ error: 'Error uploading image' });
        }
    }
];