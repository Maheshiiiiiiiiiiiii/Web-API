const Route = require('../models/Route');

exports.addRoute = async (req, res) => {
    const { name, start, end, waypoints } = req.body;
    try {
        const route = new Route({ name, start, end, waypoints });
        await route.save();
        res.status(201).json(route);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.getRoutes = async (req, res) => {
    try {
        const routes = await Route.find();
        res.json(routes);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
