const axios = require('axios');
const retry = require('async-retry');

/**
 * Handles network requests with advanced retry logic.
 * @param {Object} axiosConfig - The Axios request configuration object.
 * @param {Object} [options] - Optional settings for retry logic.
 * @param {number} [options.retries=3] - Number of retry attempts.
 * @param {number} [options.factor=2] - Exponential factor for delay between retries.
 * @param {number} [options.minTimeout=1000] - Minimum timeout between retries in milliseconds.
 * @param {number} [options.maxTimeout=5000] - Maximum timeout between retries in milliseconds.
 * @returns {Promise} - Resolves with the Axios response data or rejects with an error after the final attempt.
 */
const networkRetryHandler = async (axiosConfig, options = {}) => {
  const defaultOptions = {
    retries: 3, // Number of retries
    factor: 2, // Exponential factor
    minTimeout: 1000, // Minimum timeout between retries
    maxTimeout: 5000, // Maximum timeout between retries
  };

  const finalOptions = { ...defaultOptions, ...options };

  try {
    return await retry(async (bail, attempt) => {
      try {
        const response = await axios(axiosConfig);
        return response.data; // Return the data from the response
      } catch (error) {
        if (attempt === finalOptions.retries) {
          bail(error); // Stop retrying and propagate the error
        }
        throw error; // Retry
      }
    }, finalOptions);
  } catch (error) {
    throw new Error(`Network request failed after ${finalOptions.retries} attempts: ${error.message}`);
  }
};

module.exports = networkRetryHandler;
