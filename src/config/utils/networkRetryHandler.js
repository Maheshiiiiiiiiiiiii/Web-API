const retry = require('async-retry');
const axios = require('axios');

const networkRetryHandler = async (fn, options = {}) => {
  const defaultOptions = {
    retries: 3,
    factor: 2,
    minTimeout: 1000,
    maxTimeout: 5000
  };

  const finalOptions = { ...defaultOptions, ...options };

  return retry(async (bail, attempt) => {
    try {
      return await fn();
    } catch (error) {
      if (attempt === finalOptions.retries) {
        throw error;
      }
      throw error;
    }
  }, finalOptions);
};

module.exports = networkRetryHandler;
