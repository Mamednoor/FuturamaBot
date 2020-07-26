const { expect } = require('chai');
const { dialogflowFirebaseFulfillment } = require('../src/index.js');

describe('test firebaseFunction', () => {
  it('Realcity', (done) => {
    const req = {
      body: {
        queryResult: {
          parameters: {
            'geo-city': 'Paris',
            date: '2020-07-25',
          },
        },
      },
    };
    const res = {
      json: (data) => {
        expect(data).to.be.a('object');
        expect(data.fulfillmentText).to.be.a('string');
        expect(data.fulfillmentText).to.contain('Condition in city of Paris');
        expect(req.body).to.be.a('object');
        expect(req.body.queryResult.parameters['geo-city']).to.be.a('string');
        expect(req.body.queryResult.parameters.date).to.be.a('string');
        // expect(data.fulfillmentText).to.contain('i don\'t know what you mean');
        // console.log('data test', req.body);
        // console.log('error console', data.error);
        done();
      },
    };
    dialogflowFirebaseFulfillment(req, res);
  });
});
