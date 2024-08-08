const Route = require('../models/Route');

exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.addRoute = async (req, res) => {
    try {
        const newRoute = new Route(req.body);
        const savedRoute = await newRoute.save();
        res.status(201).json(savedRoute);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
