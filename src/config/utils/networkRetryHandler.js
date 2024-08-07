const axios = require('axios');

const networkRetryHandler = async (url, options, retries = 3) => {
    let attempt = 0;

    while (attempt < retries) {
        try {
            const response = await axios(url, options);
            return response.data;
        } catch (error) {
            attempt++;
            if (attempt >= retries) {
                throw new Error(`Failed after ${retries} retries: ${error.message}`);
            }
        }
    }
};

module.exports = networkRetryHandler;
