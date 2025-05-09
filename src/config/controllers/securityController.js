const ApiKey = require('../models/apiKey');
const crypto = require('crypto');
const User = require('../models/User');  // Assuming you have a User model for OAuth logic

// Function to generate a new API key
exports.generateApiKey = async (req, res) => {
    try {
        const { clientId } = req.body;

        // Generate a unique API key
        const apiKey = crypto.randomBytes(32).toString('hex');

        // Save the API key in the database
        const newApiKey = new ApiKey({
            key: apiKey,
            clientId
        });

        await newApiKey.save();

        res.status(201).json({
            message: 'API Key generated successfully',
            apiKey
        });
    } catch (error) {
        res.status(500).json({ message: 'Error generating API Key', error });
    }
};

// Middleware to verify the API key
exports.verifyApiKey = async (req, res, next) => {
    try {
        const apiKey = req.headers['x-api-key'];

        if (!apiKey) {
            return res.status(401).json({ message: 'API Key is missing' });
        }

        // Find the API key in the database
        const key = await ApiKey.findOne({ key: apiKey });

        if (!key) {
            return res.status(401).json({ message: 'Invalid API Key' });
        }

        // Update the last used time
        key.lastUsedAt = Date.now();
        await key.save();

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        res.status(500).json({ message: 'Error verifying API Key', error });
    }
};

// Function to handle OAuth callback
exports.oauthCallback = (req, res) => {
    const user = req.user;

    // Handle user information after successful OAuth authentication
    if (!user) {
        return res.status(401).json({ message: 'OAuth authentication failed' });
    }

    res.status(200).json({
        message: 'OAuth authentication successful',
        user: {
            id: user.id,
            name: user.name,
            email: user.email
        }
    });
};

// OAuth Login
exports.oauthLogin = (req, res, next) => {
    // Logic to initiate the OAuth login process
    passport.authenticate('oauth2', { scope: ['profile', 'email'] })(req, res, next);
};

// OAuth Callback
exports.oauthCallback = (req, res, next) => {
    passport.authenticate('oauth2', {
        successRedirect: '/',
        failureRedirect: '/login'
    })(req, res, next);
};
