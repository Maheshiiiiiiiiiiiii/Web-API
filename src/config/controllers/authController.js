const Client = require('../models/Client');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

async function hashPassword(password) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  console.log('Hashed Password:', hashedPassword);
}

hashPassword('yourPlainPassword');

// Generate a JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// Register a new client
exports.registerClient = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const clientExists = await Client.findOne({ email });

    if (clientExists) {
      return res.status(400).json({ message: 'Client already exists' });
    }

    // Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAt = new Date(); // Get the current date
    const client = await Client.create({ name, email, password: hashedPassword, createdAt });

    res.status(201).json({
      _id: client._id,
      name: client.name,
      email: client.email,
      createdAt: client.createdAt,
      token: generateToken(client._id)
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.loginClient = async (req, res) => {
  const { email, password } = req.body;

  try {
    const client = await Client.findOne({ email });

    if (!client) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.hash(password, client.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    res.status(200).json({
      _id: client._id,
      name: client.name,
      email: client.email,
      token: generateToken(client._id),
    });
  } catch (error) {
    console.error("Error during password comparison:", error);
    res.status(500).json({ message: 'Error logging in client', error });
  }
};

// Get profile of the logged-in client
exports.getProfile = async (req, res) => {
  try {
    const clientId = req.userId; // Assumes req.user is populated by middleware

    const client = await Client.findById(clientId);

    console.log(client);

    if (client) {
      res.json({
        _id: client._id,
        name: client.name,
        email: client.email
      });
    } else {
      res.status(404).json({ message: 'Client not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving profile', error });
  }
};

// Update profile of the logged-in client
exports.updateProfile = async (req, res) => {
  const { name, email, password } = req.body;
  //const clientId = req.userId; // Assumes req.user is populated by middleware

  try {
    const client = await Client.findById(email);

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    // Update client details
    client.name = name || client.name;
    client.email = email || client.email;

    if (password) {
      // Hash new password before saving
      client.password = await bcrypt.hash(password, 10);
    }

    await client.save();

    res.json({
      _id: client._id,
      name: client.name,
      email: client.email
    });
  } catch (error) {
    res.status(500).json({ message: 'Error updating profile', error });
  }
};

