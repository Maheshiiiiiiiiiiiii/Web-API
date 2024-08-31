const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('CSRF Test', () => {
    it('should prevent CSRF attacks', (done) => {
        // Simulate a CSRF attack by sending a request without the correct CSRF token
        chai.request(server)
            .post('/api/auth/login')
            .send({
                email: 'user@example.com',
                password: 'password',
                // Missing CSRF token here
            })
            .end((err, res) => {
                res.should.have.status(403);
                res.body.should.have.property('error').eql('Invalid CSRF token');
                done();
            });
    });
});
