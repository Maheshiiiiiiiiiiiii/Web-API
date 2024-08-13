const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.getClientById = async (req, res) => {
    try {
        const client = await Client.findById(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.createClient = async (req, res) => {
    const { name, email } = req.body;

    try {
        const newClient = new Client({ name, email });
        await newClient.save();
        res.status(201).json(newClient);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.updateClient = async (req, res) => {
    try {
        const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedClient) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(updatedClient);
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};

exports.deleteClient = async (req, res) => {
    try {
        const client = await Client.findByIdAndDelete(req.params.id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: 'Server error', error: err.message });
    }
};
