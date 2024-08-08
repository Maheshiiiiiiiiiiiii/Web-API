const Client = require('../models/Client');

const registerClient = async (req, res) => {
  try {
    const { name, apiKey } = req.body;
    const newClient = new Client({ name, apiKey });
    await newClient.save();
    res.status(201).json({ message: 'Client registered successfully', newClient });
  } catch (error) {
    res.status(500).json({ message: 'Error registering client', error });
  }
};

const listClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving clients', error });
  }
};

module.exports = { registerClient, listClients };
