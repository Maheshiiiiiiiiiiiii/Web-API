const axios = require('axios');

const MAX_RETRIES = 5;
const RETRY_DELAY_MS = 2000;

const retryRequest = async (requestConfig, retries = MAX_RETRIES) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      const response = await axios(requestConfig);
      return response.data;
    } catch (error) {
      if (attempt === retries) {
        throw new Error('Max retries reached');
      }
      await new Promise(res => setTimeout(res, RETRY_DELAY_MS));
    }
  }
};

module.exports = retryRequest;
