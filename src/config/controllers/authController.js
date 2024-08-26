const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

exports.registerClient = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const clientExists = await Client.findOne({ email });

    if (clientExists) {
      return res.status(400).json({ message: 'Client already exists' });
    }

    const client = await Client.create({ name, email, password });

    res.status(201).json({
      _id: client._id,
      name: client.name,
      email: client.email,
      token: generateToken(client._id)
    });
  } catch (error) {
    res.status(500).json({ message: 'Error creating client', error });
  }
};

exports.loginClient = async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await Client.findOne({ email });

    if (client && (await client.matchPassword(password))) {
      res.json({
        _id: client._id,
        name: client.name,
        email: client.email,
        token: generateToken(client._id)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error logging in client', error });
  }

exports.register = async (req, res) => {
    const { email, password } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const newClient = new Client({ email, password: hashedPassword });
        await newClient.save();

        res.status(201).json({ message: 'Client registered successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering client', error });
    }
};
}
module.exports = {
    login: (req, res) => {
        // login logic
        res.send('Login successful');
    },
    register: (req, res) => {
        // register logic
        res.send('Registration successful');
    },
    getProfile: (req, res) => {
        // getProfile logic
        res.send('Profile data');
    },
    updateProfile: (req, res) => {
        // updateProfile logic
        res.send('Profile updated');
    }
};
