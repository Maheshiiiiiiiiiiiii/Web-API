const { validateApiKey } = require('../utils/apiKeyUtils');

module.exports = async (req, res, next) => {
    const apiKey = req.headers['x-api-key'];
    if (!apiKey) {
        return res.status(401).json({ message: 'API key missing' });
    }
    const clientId = await validateApiKey(apiKey);
    if (!clientId) {
        return res.status(401).json({ message: 'Invalid or expired API key' });
    }
    req.clientId = clientId;
    next();
};
