const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const { createTestUser, deleteTestUser } = require('../utils/testHelpers');

chai.should();
chai.use(chaiHttp);

describe('Auth System Tests', () => {
    let testUser;

    before(async () => {
        testUser = await createTestUser();
    });

    after(async () => {
        await deleteTestUser(testUser);
    });

    describe('POST /api/auth/register', () => {
        it('should register a new user', (done) => {
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
            chai.request(server)
                .post('/api/auth/login')
                .send({
                    email: testUser.email,
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
