const Client = require('../models/Client');

exports.registerClient = async (req, res) => {
  const { name, apiKey } = req.body;

  try {
    const client = new Client({ name, apiKey });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: 'Failed to register client application' });
  }
};

exports.listClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
};
