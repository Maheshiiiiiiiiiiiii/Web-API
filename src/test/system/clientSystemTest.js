const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const { createTestClient, deleteTestClient } = require('../utils/testHelpers');

chai.should();
chai.use(chaiHttp);

describe('Client System Tests', () => {
    let testClient;

    before(async () => {
        testClient = await createTestClient();
    });

    after(async () => {
        await deleteTestClient(testClient);
    });

    describe('GET /api/clients', () => {
        it('should get all clients', (done) => {
            chai.request(server)
                .get('/api/clients')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('POST /api/clients', () => {
        it('should create a new client', (done) => {
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
