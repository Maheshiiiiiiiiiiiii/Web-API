const crypto = require('crypto');

module.exports = {
    generateApiKey: () => {
        return crypto.randomBytes(32).toString('hex');
    },
    apiKeyExpiryDays: 30,
};
