const Route = require('../models/Route');

exports.getAllRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getRouteById = async (req, res) => {
    try {
        const route = await Route.findById(req.params.id);
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.status(200).json(route);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.createRoute = async (req, res) => {
    const { name, stations } = req.body;

    try {
        const newRoute = new Route({ name, stations });
        await newRoute.save();
        res.status(201).json(newRoute);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.updateRoute = async (req, res) => {
    try {
        const updatedRoute = await Route.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedRoute) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.status(200).json(updatedRoute);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.deleteRoute = async (req, res) => {
    try {
        const route = await Route.findByIdAndDelete(req.params.id);
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.status(200).json({ message: 'Route deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
