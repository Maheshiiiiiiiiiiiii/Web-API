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
  const { name, username, email, contact, password, confirmPassword } = req.body;

  // Validate input data
  if (!name || !username || !email || !contact || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if the email is already registered
    const existingClient = await Client.findOne({ email });
    if (existingClient) {
      return res.status(400).json({ message: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new client
    const newClient = new Client({
      name,
      username,
      email,
      contact,
      password: hashedPassword,
      createdAt: new Date(), // Set the creation date
    });

    // Save the client to the database
    await newClient.save();

    res.status(201).json({ message: 'Client registered successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error registering client', error });
  }
};

exports.loginClient = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find the client by email
    const client = await Client.findOne({ email });
    if (!client) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, client.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Respond with success message
    res.status(200).json({
      _id: client._id,
      username: client.username,
      email: client.email,
      contact: client.contact,
      token: generateToken(client._id),
    });
  } catch (error) {
    console.error("Error during login:", error);
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
  console.log('Request body:', req.body);

  const clientId = req.userId; // Assumes req.user is populated by middleware

  try {
    const client = await Client.findById(req.email);

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

