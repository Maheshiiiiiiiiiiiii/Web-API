const Client = require('../models/Client');

exports.getAllClients = async (req, res) => {
    try {
        const clients = await Client.find();
        res.status(200).json(clients);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching clients', error });
    }
};

exports.getClientById = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findById(id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json(client);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching client', error });
    }
};

exports.updateClient = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;

    try {
        const client = await Client.findByIdAndUpdate(id, updates, { new: true });
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client updated successfully', client });
    } catch (error) {
        res.status(500).json({ message: 'Error updating client', error });
    }
};

exports.deleteClient = async (req, res) => {
    const { id } = req.params;
    try {
        const client = await Client.findByIdAndDelete(id);
        if (!client) {
            return res.status(404).json({ message: 'Client not found' });
        }
        res.status(200).json({ message: 'Client deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting client', error });
    }
};
