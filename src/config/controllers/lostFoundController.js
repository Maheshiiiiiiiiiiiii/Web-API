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

exports.approveLostFoundItem = async (req, res) => {
    try {
        const item = await LostFound.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        item.approved = true;
        await item.save();
        res.status(200).json({ message: 'Item approved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while approving the item' });
    }
};

exports.deleteLostFoundItem = async (req, res) => {
    try {
        const item = await LostFound.findById(req.params.id);
        if (!item) return res.status(404).json({ message: 'Item not found' });

        await item.remove();
        res.status(200).json({ message: 'Item deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting the item' });
    }
};

exports.createLostFoundItem = async (req, res) => {
    try {
        const newItem = new LostFound({
            _id: req.body._id,
            itemType: req.body.itemType,
            description: req.body.description,
            contactInfo: req.body.contactInfo,
            location: req.body.location,
            dateReported: req.body.dateReported,
            status: req.body.status
        });

        const savedItem = await newItem.save();
        res.status(201).json(savedItem);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating the item' });
    }
};