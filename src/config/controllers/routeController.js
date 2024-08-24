const Route = require('../models/Route');

exports.createRoute = async (req, res) => {
    const { name, stops } = req.body;

    try {
        const newRoute = new Route({ name, stops });
        await newRoute.save();
        res.status(201).json(newRoute);
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

exports.createRoute = async (req, res) => {
    const { name, startLocation, endLocation } = req.body;
    
    try {
        const route = new Route({ name, startLocation, endLocation });
        await route.save();
        res.status(201).json({ message: 'Route created successfully', route });
    } catch (error) {
        res.status(500).json({ message: 'Error creating route', error });
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
