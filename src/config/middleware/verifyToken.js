const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken'); // Import jwt module
const User = require('../models/Client'); // Assuming you have a User model defined

const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const verifyToken = async (req, res, next) => {
  	const authHeader = req.headers['authorization'];
  	const token = authHeader && authHeader.split(' ')[1]; // Extract token from "Bearer <token>"

  	if (!token) {
		return res.status(403).json({ error: 'No token provided' });
	}

	// const { email, password } = req.body;
	// if (!email || !password) {
	// 	return res.status(400).json({ error: 'Email and password are required' });
	// }

	try {
		const decoded = jwt.verify(token, JWT_SECRET);
		console.log('Decoded:', decoded);
		const user = await User.findById(decoded.id);

		if (!user) {
		return res.status(401).json({ message: 'User not found' });
		}

		req.user = user;
		next();
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;