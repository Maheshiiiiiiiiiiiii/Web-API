import chai from 'chai';
import chaiHttp from 'chai-http';
import sinon from 'sinon';
import server from '../../server.js';
import User from '../../models/client'; 


chai.should();
chai.use(chaiHttp);

describe('Auth API', () => {
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