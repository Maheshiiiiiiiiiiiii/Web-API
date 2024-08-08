// controllers/authController.js
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Client = require('../models/Client');
require('dotenv').config();

// @route   POST /auth/register
// @desc    Register a new client
// @access  Public
const register = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        // Check if the user already exists
        let client = await Client.findOne({ email });
        if (client) {
            return res.status(400).json({ msg: 'Client already exists' });
        }

        // Create a new client instance
        client = new Client({
            username,
            email,
            password,
        });

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        client.password = await bcrypt.hash(password, salt);

        // Save the client to the database
        await client.save();

        // Create a payload for JWT
        const payload = {
            client: {
                id: client.id,
            },
        };

        // Sign the JWT and return it
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

// @route   POST /auth/login
// @desc    Authenticate a client and get a token
// @access  Public
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the client exists
        let client = await Client.findOne({ email });
        if (!client) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, client.password);
        if (!isMatch) {
            return res.status(400).json({ msg: 'Invalid credentials' });
        }

        // Create a payload for JWT
        const payload = {
            client: {
                id: client.id,
            },
        };

        // Sign the JWT and return it
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '1h' },
            (err, token) => {
                if (err) throw err;
                res.json({ token });
            }
        );
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
};

module.exports = {
    register,
    login,
};
