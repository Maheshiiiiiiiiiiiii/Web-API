const Route = require('../models/Route');

exports.addRoute = async (req, res) => {
    const { name, stops } = req.body;
    try {
        const newRoute = new Route({ name, stops });
        await newRoute.save();
        res.status(201).json({ message: 'Route added successfully', route: newRoute });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while adding the route' });
    }
};

exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving routes' });
    }
};

exports.getRouteById = async (req, res) => {
    try {
        const route = await Route.findById(req.params.id);
        if (!route) return res.status(404).json({ message: 'Route not found' });
        res.status(200).json(route);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving the route' });
    }
};
