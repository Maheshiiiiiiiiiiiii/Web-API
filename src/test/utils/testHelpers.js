const User = require('../models/User');
const Client = require('../models/Client');
const Engine = require('../models/Engine');
const Train = require('../models/Train');

exports.createTestUser = async () => {
    const user = new User({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password',
    });
    await user.save();
    return user;
};

exports.deleteTestUser = async (user) => {
    await User.findByIdAndDelete(user._id);
};

exports.createTestClient = async () => {
    const client = new Client({
        name: 'Test Client',
        apiKey: '12345',
    });
    await client.save();
    return client;
};

exports.deleteTestClient = async (client) => {
    await Client.findByIdAndDelete(client._id);
};

exports.createTestEngine = async () => {
    const engine = new Engine({
        engineId: 'ENG123',
        status: 'active',
    });
    await engine.save();
    return engine;
};

exports.deleteTestEngine = async (engine) => {
    await Engine.findByIdAndDelete(engine._id);
};

exports.createTestTrain = async () => {
    const train = new Train({
        trainId: 'TR123',
        status: 'on-time',
    });
    await train.save();
    return train;
};

exports.deleteTestTrain = async (train) => {
    await Train.findByIdAndDelete(train._id);
};