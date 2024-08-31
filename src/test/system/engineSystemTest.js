const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const { createTestEngine, deleteTestEngine } = require('../utils/testHelpers');

chai.should();
chai.use(chaiHttp);

describe('Engine System Tests', () => {
    let testEngine;

    before(async () => {
        testEngine = await createTestEngine();
    });

    after(async () => {
        await deleteTestEngine(testEngine);
    });

    describe('GET /api/engines', () => {
        it('should get all engines', (done) => {
            chai.request(server)
                .get('/api/engines')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('POST /api/engines', () => {
        it('should create a new engine', (done) => {
            chai.request(server)
                .post('/api/engines')
                .send({
                    engineId: 'ENG123',
                    status: 'active',
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('engineId').eql('ENG123');
                    done();
                });
        });
    });
});
