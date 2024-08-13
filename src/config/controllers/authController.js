const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Client = require('../models/Client');

exports.register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const existingClient = await Client.findOne({ username });
        if (existingClient) {
            return res.status(400).json({ msg: 'Client already exists' });
        }
        const client = new Client({ username, password: bcrypt.hashSync(password, 10) });
        await client.save();
        const token = jwt.sign({ id: client.id }, process.env.JWT_SECRET, { expiresIn: 3600 });
        res.status(201).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const client = await Client.findOne({ username });
        if (!client) {
            return res.status(400).json({ msg: 'Client not found' });
        }
        const isMatch = bcrypt.compareSync(password, client.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }
        const token = jwt.sign({ id: client.id }, process.env.JWT_SECRET, { expiresIn: 3600 });
        res.status(200).json({ token });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};
