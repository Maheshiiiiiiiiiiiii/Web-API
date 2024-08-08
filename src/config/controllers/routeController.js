const Route = require('../models/Route');

const addRoute = async (req, res) => {
  try {
    const { name, stops } = req.body;
    const newRoute = new Route({ name, stops });
    await newRoute.save();
    res.status(201).json({ message: 'Route added successfully', newRoute });
  } catch (error) {
    res.status(500).json({ message: 'Error adding route', error });
  }
};

const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.status(200).json(routes);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving routes', error });
  }
};

module.exports = { addRoute, getRoutes };
