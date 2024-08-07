const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Client = require('../models/Client');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existingClient = await Client.findOne({ email });
        if (existingClient) {
            return res.status(400).json({ message: 'Client already exists' });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const client = new Client({
            name,
            email,
            password: hashedPassword,
        });

        await client.save();

        res.status(201).json({ message: 'Client registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering client', error });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const client = await Client.findOne({ email });
        if (!client) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const isMatch = await bcrypt.compare(password, client.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        const token = jwt.sign({ id: client._id }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        });

        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
