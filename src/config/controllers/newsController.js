const News = require('../models/newsModel'); // Assuming you have a News model

// Fetch all news updates
exports.getNewsUpdates = async (req, res) => {
    try {
        const newsUpdates = await News.find();
        res.json(newsUpdates);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching news updates', error });
    }
};

// Approve a news update
exports.approveNewsUpdate = async (req, res) => {
    try {
        const newsUpdate = await News.findById(req.params.id);
        if (!newsUpdate) {
            return res.status(404).json({ message: 'News update not found' });
        }
        newsUpdate.approved = true;
        await newsUpdate.save();
        res.json({ message: 'News update approved', newsUpdate });
    } catch (error) {
        res.status(500).json({ message: 'Error approving news update', error });
    }
};

// Delete a news update
exports.deleteNewsUpdate = async (req, res) => {
    try {
        const newsUpdate = await News.findById(req.params.id);
        if (!newsUpdate) {
            return res.status(404).json({ message: 'News update not found' });
        }
        await newsUpdate.remove();
        res.json({ message: 'News update deleted' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting news update', error });
    }
};

// Create a new news update
exports.createNewsUpdate = async (req, res) => {
    const { title, content, author, date } = req.body;

    if (!title || !content || !author || !date) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newNewsUpdate = new News({
            title,
            content,
            author,
            date
        });

        await newNewsUpdate.save();
        res.status(201).json({ message: 'News update created', newNewsUpdate });
    } catch (error) {
        res.status(500).json({ message: 'Error creating news update', error });
    }
};