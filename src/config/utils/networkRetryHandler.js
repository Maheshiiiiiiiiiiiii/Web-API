const networkRetryHandler = async (operation, retries = 3, delay = 1000) => {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      await operation();
      return;
    } catch (error) {
      if (attempt === retries) {
        throw error;
      }
      console.log(`Retrying operation (${attempt}/${retries})...`);
      await new Promise(res => setTimeout(res, delay));
    }
  }
};

module.exports = networkRetryHandler;
