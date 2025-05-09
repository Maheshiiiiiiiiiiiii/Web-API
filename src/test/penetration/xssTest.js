const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

chai.should();
chai.use(chaiHttp);

describe('XSS Test', () => {
    it('should prevent XSS in user input', (done) => {
        chai.request(server)
            .post('/api/clients')
            .send({
                name: '<script>alert("XSS")</script>',
                apiKey: '12345',
            })
            .end((err, res) => {
                res.should.have.status(400);
                res.body.should.have.property('error');
                done();
            });
    });
});
