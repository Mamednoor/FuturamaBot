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
        console.log('data test', data);
        // expect(data.location).to.equal(true);
        expect(data.fulfillmentText).to.contain('Condition in city of Paris');
        // expect(data.fulfillmentText).to.contain('i don\'t know what you mean');
        console.log('error console', data.error);
        done();
      },
    };
    dialogflowFirebaseFulfillment(req, res);
  });
});
