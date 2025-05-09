const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('SQL Injection Test', () => {
    it('should not allow SQL Injection through login', (done) => {
        chai.request(server)
            .post('/api/auth/login')
            .send({
                email: "' OR 1=1 --",
                password: "password",
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('error');
                done();
            });
    });
});
