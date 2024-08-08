const Route = require('../models/Route');
const optimizationUtils = require('../utils/optimizationUtils');

exports.getAllRoutes = async (req, res) => {
    try {
        const routes = await optimizationUtils.applyQueryOptimization(Route, {});
        res.json(routes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createRoute = async (req, res) => {
    const { name, stops } = req.body;

    try {
        const newRoute = new Route({ name, stops });
        await newRoute.save();
        res.status(201).json(newRoute);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
