// userController.test.js
const { registerUser, loginUser } = require('./userController');
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

jest.mock('../models/User');
jest.mock('bcryptjs');
jest.mock('jsonwebtoken');

describe('User Controller', () => {
    let req, res;

    beforeEach(() => {
        req = {
            body: {
                username: 'testuser',
                email: 'test@example.com',
                password: 'password123'
            }
        };
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn()
        };
    });

    describe('registerUser', () => {
        it('should register a new user and return 201 status', async () => {
            bcrypt.hash.mockResolvedValue('hashedpassword');
            User.mockImplementation(() => ({
                save: jest.fn().mockResolvedValue({})
            }));

            await registerUser(req, res);

            expect(bcrypt.hash).toHaveBeenCalledWith('password123', 10);
            expect(User).toHaveBeenCalledWith({ username: 'testuser', email: 'test@example.com', password: 'hashedpassword' });
            expect(res.status).toHaveBeenCalledWith(201);
            expect(res.json).toHaveBeenCalledWith({ message: 'User registered successfully' });
        });

        it('should return 500 status if there is an error', async () => {
            bcrypt.hash.mockRejectedValue(new Error('Hashing error'));

            await registerUser(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Server error', error: expect.any(Error) });
        });
    });

    describe('loginUser', () => {
        it('should login a user and return 200 status with token', async () => {
            const user = { _id: 'userId', password: 'hashedpassword' };
            User.findOne.mockResolvedValue(user);
            bcrypt.compare.mockResolvedValue(true);
            jwt.sign.mockReturnValue('token');

            await loginUser(req, res);

            expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
            expect(bcrypt.compare).toHaveBeenCalledWith('password123', 'hashedpassword');
            expect(jwt.sign).toHaveBeenCalledWith({ userId: 'userId' }, process.env.JWT_SECRET, { expiresIn: '1h' });
            expect(res.status).toHaveBeenCalledWith(200);
            expect(res.json).toHaveBeenCalledWith({ token: 'token' });
        });

        it('should return 400 status if credentials are invalid', async () => {
            User.findOne.mockResolvedValue(null);

            await loginUser(req, res);

            expect(User.findOne).toHaveBeenCalledWith({ email: 'test@example.com' });
            expect(res.status).toHaveBeenCalledWith(400);
            expect(res.json).toHaveBeenCalledWith({ message: 'Invalid credentials' });
        });

        it('should return 500 status if there is an error', async () => {
            User.findOne.mockRejectedValue(new Error('Database error'));

            await loginUser(req, res);

            expect(res.status).toHaveBeenCalledWith(500);
            expect(res.json).toHaveBeenCalledWith({ message: 'Server error', error: expect.any(Error) });
        });
    });
});