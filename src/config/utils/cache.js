const redis = require('redis');

const redisClient = redis.createClient({
    host: 'localhost',
    port: 6379
});

redisClient.on('error', (err) => {
    console.log('Redis error: ', err);
});

const setCache = (key, value, expiration = 3600) => {
    redisClient.setex(key, expiration, JSON.stringify(value));
};

const getCache = (key, callback) => {
    redisClient.get(key, (err, data) => {
        if (err) {
            console.error('Redis get error: ', err);
            return callback(err);
        }
        if (data) {
            return callback(null, JSON.parse(data));
        }
        return callback(null, null);
    });
};

module.exports = {
    setCache,
    getCache
};
