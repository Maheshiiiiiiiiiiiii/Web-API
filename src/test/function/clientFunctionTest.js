const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../server');
const Client = require('../models/Client');

chai.should();
chai.use(chaiHttp);

describe('Client Function Tests', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('GET /api/clients', () => {
        it('should get all clients', (done) => {
            sinon.stub(Client, 'find').resolves([{
                name: 'Client1',
                apiKey: '12345'
            }]);

            chai.request(server)
                .get('/api/clients')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    describe('POST /api/clients', () => {
        it('should create a new client', (done) => {
            sinon.stub(Client.prototype, 'save').resolves({
                _id: '123456',
                name: 'Test Client',
                apiKey: '12345'
            });

            chai.request(server)
                .post('/api/clients')
                .send({
                    name: 'Test Client',
                    apiKey: '12345',
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('name').eql('Test Client');
                    done();
                });
        });
    });
});
