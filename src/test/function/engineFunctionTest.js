const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const server = require('../server');
const Engine = require('../models/Engine');

chai.should();
chai.use(chaiHttp);

describe('Engine Function Tests', () => {
    afterEach(() => {
        sinon.restore();
    });

    describe('GET /api/engines', () => {
        it('should get all engines', (done) => {
            sinon.stub(Engine, 'find').resolves([{
                engineId: 'ENG123',
                status: 'active'
            }]);

            chai.request(server)
                .get('/api/engines')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(1);
                    done();
                });
        });
    });

    describe('POST /api/engines', () => {
        it('should create a new engine', (done) => {
            sinon.stub(Engine.prototype, 'save').resolves({
                _id: '123456',
                engineId: 'ENG123',
                status: 'active'
            });

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
