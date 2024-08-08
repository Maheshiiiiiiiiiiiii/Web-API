const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Client = require('../models/Client');

// Registration logic here
exports.register = async (req, res) => {
    const { username, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 12);
        const newClient = new Client({ username, password: hashedPassword });
        await newClient.save();

        const token = jwt.sign({ id: newClient._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(201).json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Authentication logic here
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const client = await Client.findOne({ username });
        if (!client) return res.status(400).json({ error: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, client.password);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ id: client._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
