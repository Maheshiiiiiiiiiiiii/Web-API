const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('../models/Client'); // Assuming you have a User model defined

const JWT_SECRET = process.env.JWT_SECRET;
const MONGO_URI = process.env.MONGO_URI;

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const verifyToken = async (req, res, next) => {
	const token = req.headers['authorization'];
	const { email, password, name, newEmail, newPassword } = req.body;

	if (!token) {
		return res.status(403).json({ error: 'No token provided' });
	}

	if (!email || !password) {
		return res.status(400).json({ error: 'Email and password are required' });
	}

	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}

		const passwordMatch = await bcrypt.hash(password, user.password);
	/*if (!passwordMatch) {
			return res.status(401).json({ error: 'Invalid password' });
		}*/

		jwt.verify(token, JWT_SECRET, async (err, decoded) => {
			if (err) {
				return res.status(500).json({ error: 'Failed to authenticate token' });
			}
			req.userId = user._id;

			// Update user record if new data is provided
			const updatedData = {};
			if (name) updatedData.name = name;
			if (newEmail) updatedData.email = newEmail;
			if (newPassword) updatedData.password = await bcrypt.hash(newPassword, 10);

			if (Object.keys(updatedData).length > 0) {
				await User.updateOne({ _id: user._id }, { $set: updatedData });
			}

			next();
		});
	} catch (err) {
		return res.status(500).json({ error: 'Internal server error' });
	}
};

module.exports = verifyToken;