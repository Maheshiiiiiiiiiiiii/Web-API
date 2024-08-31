const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const { createTestTrain, deleteTestTrain } = require('../utils/testHelpers');

chai.should();
chai.use(chaiHttp);

describe('Train System Tests', () => {
    let testTrain;

    before(async () => {
        testTrain = await createTestTrain();
    });

    after(async () => {
        await deleteTestTrain(testTrain);
    });

    describe('GET /api/trains', () => {
        it('should get all trains', (done) => {
            chai.request(server)
                .get('/api/trains')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    done();
                });
        });
    });

    describe('POST /api/trains', () => {
        it('should create a new train', (done) => {
            chai.request(server)
                .post('/api/trains')
                .send({
                    trainId: 'TR123',
                    status: 'on-time',
                })
                .end((err, res) => {
                    res.should.have.status(201);
                    res.body.should.be.a('object');
                    res.body.should.have.property('trainId').eql('TR123');
                    done();
                });
        });
    });
});
