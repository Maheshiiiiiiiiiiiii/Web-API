const Route = require('../models/Route');

exports.createRoute = async (req, res) => {
    const { name, stops } = req.body;

    try {
        const route = new Route({ name, stops });
        await route.save();
        res.status(201).json(route);
    } catch (error) {
        res.status(500).json({ message: 'Error creating route', error });
    }
};

exports.getAllRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.status(200).json(routes);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching routes', error });
    }
};

exports.getRouteById = async (req, res) => {
    const { id } = req.params;

    try {
        const route = await Route.findById(id);
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.status(200).json(route);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching route', error });
    }
};
