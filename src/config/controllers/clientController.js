const Client = require('../models/Client');

exports.registerClient = async (req, res) => {
    const { name, email, apiKey } = req.body;
    try {
        const newClient = new Client({ name, email, apiKey });
        await newClient.save();
        res.status(201).json({ message: 'Client registered successfully', client: newClient });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred during client registration' });
    }
};

exports.listClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while retrieving clients' });
    }
};
