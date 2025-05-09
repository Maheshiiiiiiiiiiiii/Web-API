const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../server');
const Train = require('../models/Train');

chai.should();
chai.use(chaiHttp);

describe('Train Function Tests', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('GET /api/trains', () => {
        it('should get all trains', (done) => {
            sinon.stub(Train, 'find').resolves([{
                trainId: 'TR123',
                status: 'on-time'
            }]);

            chai.request(server)
                .get('/api/trains')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    describe('POST /api/trains', () => {
        it('should create a new train', (done) => {
            sinon.stub(Train.prototype, 'save').resolves({
                _id: '123456',
                trainId: 'TR123',
                status: 'on-time'
            });

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
