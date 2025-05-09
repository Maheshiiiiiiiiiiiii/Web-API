const ApiKey = require('../models/apiKey');
const { generateApiKey, apiKeyExpiryDays } = require('../config/security');

module.exports = {
    createApiKey: async (clientId) => {
        const key = generateApiKey();
        const expiresAt = new Date();
        expiresAt.setDate(expiresAt.getDate() + apiKeyExpiryDays);

        const apiKey = new ApiKey({ key, clientId, expiresAt });
        await apiKey.save();
        return key;
    },
    validateApiKey: async (key) => {
        const apiKey = await ApiKey.findOne({ key });
        if (apiKey && apiKey.expiresAt > new Date()) {
            return apiKey.clientId;
        }
        return null;
    },
};
