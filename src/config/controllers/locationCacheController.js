const LocationCache = require('../models/LocationCache');

exports.cacheLocation = async (req, res) => {
    try {
        const { trainId, cachedLocation } = req.body;

        const newCache = new LocationCache({ trainId, cachedLocation });
        await newCache.save();

        res.status(201).json(newCache);
    } catch (error) {
        res.status(500).json({ error: 'Failed to cache location' });
    }
};

exports.getCachedLocation = async (req, res) => {
    try {
        const { trainId } = req.params;
        const cache = await LocationCache.findOne({ trainId });

        if (!cache) {
            return res.status(404).json({ error: 'No cached location found for this train' });
        }

        res.status(200).json(cache);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve cached location' });
    }
};

exports.deleteCachedLocation = async (req, res) => {
    try {
        const { trainId } = req.params;
        await LocationCache.findOneAndDelete({ trainId });

        res.status(200).json({ message: 'Cached location deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete cached location' });
    }
};
