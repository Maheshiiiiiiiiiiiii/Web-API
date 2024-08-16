const News = require('../models/news');

exports.createNews = async (req, res) => {
    const { title, content, author } = req.body;
    try {
        const newNews = new News({ title, content, author });
        await newNews.save();
        res.status(201).json({ message: 'News created successfully', news: newNews });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while creating news' });
    }
};

exports.getAllNews = async (req, res) => {
    try {
        const news = await News.find().sort({ createdAt: -1 });
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving news' });
    }
};

exports.getNewsById = async (req, res) => {
    try {
        const news = await News.findById(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.status(200).json(news);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving news' });
    }
};

exports.updateNews = async (req, res) => {
    try {
        const { title, content } = req.body;
        const news = await News.findByIdAndUpdate(
            req.params.id,
            { title, content },
            { new: true, runValidators: true }
        );
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.status(200).json({ message: 'News updated successfully', news });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while updating news' });
    }
};

exports.deleteNews = async (req, res) => {
    try {
        const news = await News.findByIdAndDelete(req.params.id);
        if (!news) return res.status(404).json({ message: 'News not found' });
        res.status(200).json({ message: 'News deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while deleting news' });
    }
};
