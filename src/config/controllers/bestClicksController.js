const BestClick = require('../models/BestClick');

exports.createBestClick = async (req, res) => {
    try {
        const { route, place, date, time } = req.body;
        const photoUrl = `/assets/uploads/${req.file.filename}`;

        const newBestClick = new BestClick({
            route,
            place,
            date,
            time,
            photoUrl,
        });

        const savedBestClick = await newBestClick.save();
        res.status(201).json(savedBestClick);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};

exports.getBestClicks = async (req, res) => {
    try {
        const bestClicks = await BestClick.find().sort({ createdAt: -1 });
        res.status(200).json(bestClicks);
    } catch (error) {
        res.status(500).json({ message: 'Server Error', error });
    }
};
