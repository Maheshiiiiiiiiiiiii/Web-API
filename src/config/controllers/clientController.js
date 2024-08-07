const Client = require('../models/Client');

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching clients', error });
    }
};

exports.createClient = async (req, res) => {
    const { name, email } = req.body;
    
    try {
        const client = new Client({ name, email });
        await client.save();
        res.status(201).json({ message: 'Client created successfully', client });
    } catch (error) {
        res.status(500).json({ message: 'Error creating client', error });
    }
};
