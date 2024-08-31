const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../server');
const User = require('../models/User');

chai.should();
chai.use(chaiHttp);

describe('Auth Function Tests', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('POST /api/auth/register', () => {
        it('should register a new user', (done) => {
            const mockUser = {
                _id: '123456',
                username: 'newuser',
                email: 'newuser@example.com',
                password: 'hashedpassword'
            };

            sinon.stub(User.prototype, 'save').resolves(mockUser);

            chai.request(server)
                .post('/api/auth/register')
                .send({
                    username: 'newuser',
                    email: 'newuser@example.com',
                    password: 'password',
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                    done();
                });
        });
    });

    describe('POST /api/auth/login', () => {
        it('should log in an existing user', (done) => {
            sinon.stub(User, 'findOne').resolves({
                _id: '123456',
                email: 'testuser@example.com',
                password: '$2a$10$somehashedpassword'  // hashed password
            });

            chai.request(server)
                .post('/api/auth/login')
                .send({
                    email: 'testuser@example.com',
                    password: 'password',
                })
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('token');
                    done();
                });
        });
    });
});
