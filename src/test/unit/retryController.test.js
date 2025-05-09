const chai = require('chai');
const sinon = require('sinon');
const sinonMongoose = require('sinon-mongoose');
const chaiHttp = require('chai-http');
const express = require('express');
const bodyParser = require('body-parser');
const Retry = require('../../models/Retry');
const retryController = require('../../controllers/retryController');

chai.use(chaiHttp);
const { expect } = chai;

describe('Retry Controller', () => {
    let app;

    before(() => {
        app = express();
        app.use(bodyParser.json());
        app.post('/retry', retryController.createRetryRecord);
        app.put('/retry/:operationId', retryController.updateRetryStatus);
        app.patch('/retry/:operationId/increment', retryController.incrementRetryCount);
    });

    afterEach(() => {
        sinon.restore();
    });

    describe('createRetryRecord', () => {
        it('should create a new retry record', async () => {
            const reqBody = { operationId: '123', status: 'pending' };
            const resBody = { _id: '1', operationId: '123', status: 'pending' };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('create').withArgs(reqBody).resolves(resBody);

            const res = await chai.request(app).post('/retry').send(reqBody);

            expect(res).to.have.status(201);
            expect(res.body).to.deep.equal(resBody);

            RetryMock.verify();
        });

        it('should return 500 if creation fails', async () => {
            const reqBody = { operationId: '123', status: 'pending' };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('create').withArgs(reqBody).rejects(new Error('Failed to create retry record'));

            const res = await chai.request(app).post('/retry').send(reqBody);

            expect(res).to.have.status(500);
            expect(res.body).to.deep.equal({ error: 'Failed to create retry record' });

            RetryMock.verify();
        });
    });

    describe('updateRetryStatus', () => {
        it('should update the retry status', async () => {
            const reqParams = { operationId: '123' };
            const reqBody = { status: 'completed' };
            const resBody = { _id: '1', operationId: '123', status: 'completed' };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('findOneAndUpdate').withArgs(reqParams, reqBody, { new: true }).resolves(resBody);

            const res = await chai.request(app).put(`/retry/${reqParams.operationId}`).send(reqBody);

            expect(res).to.have.status(200);
            expect(res.body).to.deep.equal(resBody);

            RetryMock.verify();
        });

        it('should return 404 if retry record not found', async () => {
            const reqParams = { operationId: '123' };
            const reqBody = { status: 'completed' };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('findOneAndUpdate').withArgs(reqParams, reqBody, { new: true }).resolves(null);

            const res = await chai.request(app).put(`/retry/${reqParams.operationId}`).send(reqBody);

            expect(res).to.have.status(404);
            expect(res.body).to.deep.equal({ error: 'Retry record not found' });

            RetryMock.verify();
        });

        it('should return 500 if update fails', async () => {
            const reqParams = { operationId: '123' };
            const reqBody = { status: 'completed' };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('findOneAndUpdate').withArgs(reqParams, reqBody, { new: true }).rejects(new Error('Failed to update retry status'));

            const res = await chai.request(app).put(`/retry/${reqParams.operationId}`).send(reqBody);

            expect(res).to.have.status(500);
            expect(res.body).to.deep.equal({ error: 'Failed to update retry status' });

            RetryMock.verify();
        });
    });

    describe('incrementRetryCount', () => {
        it('should increment the retry count', async () => {
            const reqParams = { operationId: '123' };
            const resBody = { _id: '1', operationId: '123', retryCount: 1, lastAttempt: Date.now() };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('findOneAndUpdate').withArgs(reqParams, { $inc: { retryCount: 1 }, lastAttempt: Date.now() }, { new: true }).resolves(resBody);

            const res = await chai.request(app).patch(`/retry/${reqParams.operationId}/increment`);

            expect(res).to.have.status(200);
            expect(res.body).to.deep.equal(resBody);

            RetryMock.verify();
        });

        it('should return 404 if retry record not found', async () => {
            const reqParams = { operationId: '123' };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('findOneAndUpdate').withArgs(reqParams, { $inc: { retryCount: 1 }, lastAttempt: Date.now() }, { new: true }).resolves(null);

            const res = await chai.request(app).patch(`/retry/${reqParams.operationId}/increment`);

            expect(res).to.have.status(404);
            expect(res.body).to.deep.equal({ error: 'Retry record not found' });

            RetryMock.verify();
        });

        it('should return 500 if increment fails', async () => {
            const reqParams = { operationId: '123' };

            const RetryMock = sinon.mock(Retry);
            RetryMock.expects('findOneAndUpdate').withArgs(reqParams, { $inc: { retryCount: 1 }, lastAttempt: Date.now() }, { new: true }).rejects(new Error('Failed to increment retry count'));

            const res = await chai.request(app).patch(`/retry/${reqParams.operationId}/increment`);

            expect(res).to.have.status(500);
            expect(res.body).to.deep.equal({ error: 'Failed to increment retry count' });

            RetryMock.verify();
        });
    });
});