const Route = require('../models/Route');
const Train = require('../models/Train');

exports.createRoute = async (req, res) => {
    const { route_id, start_location, end_location, stops, trains } = req.body;
    
    try {
        const newRoute = new Route({
            route_id,
            start_location,
            end_location,
            stops,
            trains
        });

        await newRoute.save();
        res.status(201).json({ message: 'Route created successfully', route: newRoute });
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
        const route = await Route.findById(id).populate('trains');
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.status(200).json(route);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching route', error });
    }
};

exports.updateRoute = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        const route = await Route.findByIdAndUpdate(id, updates, { new: true });
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.status(200).json({ message: 'Route updated successfully', route });
    } catch (error) {
        res.status(500).json({ message: 'Error updating route', error });
    }
};

exports.deleteRoute = async (req, res) => {
    const { id } = req.params;
    try {
        const route = await Route.findByIdAndDelete(id);
        if (!route) {
            return res.status(404).json({ message: 'Route not found' });
        }
        res.status(200).json({ message: 'Route deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting route', error });
    }
};
