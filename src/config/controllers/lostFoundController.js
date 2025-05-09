const LostFound = require('../models/lostFound');

exports.createLostFound = async (req, res) => {
    try {
        const lostFound = new LostFound(req.body);
        await lostFound.save();
        res.status(201).json({ message: 'Item reported successfully', lostFound });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while reporting the item' });
    }
};

exports.getLostFoundItems = async (req, res) => {
    try {
        const items = await LostFound.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving items' });
    }
};

exports.getLostFoundItem = async (req, res) => {
    try {
        const item = await LostFound.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });
        res.status(200).json(item);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the item' });
    }
};
