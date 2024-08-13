const Client = require('../models/Client');

exports.listClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.json(clients);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.registerClient = async (req, res) => {
    const { name, email, apiKey } = req.body;
    try {
        const client = new Client({ name, email, apiKey });
        await client.save();
        res.status(201).json(client);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
