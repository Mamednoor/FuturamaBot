const { expect } = require('chai');
const { dialogflowFirebaseFulfillment } = require('../src/index.js');

describe('test firebaseFunction', () => {
  it('Realcity', () => {
    const req = {
      body: {
        queryResult: {
          parameters: {
            'geo-city': 'Paris',
          },
        },
      },
    };
    const res = {
      json: (responseBody) => {
        console.log(responseBody);
        expect(responseBody).to.be(200);
        expect(responseBody).to.be.a('object');
        expect(responseBody.fulfillmentText).to.be.a('string');
        const expectedTextCity = 'Condition in city of Paris';
        const includeText = responseBody.fulfillmentText.startsWith(expectedTextCity);
        expect(includeText).to.equal(true);
      },
    };
    dialogflowFirebaseFulfillment(req, res);
  });
  it('Falsecity', () => {
    const req = {
      body: {
        queryResult: {
          parameters: {
            'geo-city': 'Tatouine',
          },
        },
      },
    };
    const res = {
      json: (responseBody) => {
        console.log(responseBody);
        expect(responseBody).to.be.a('object');
        expect(responseBody.fulfillmentText).to.be.a('string');
        const expectedTextCity = 'Je ne connais pas la météo à Tatouine';
        expect(responseBody.fulfillmentText).to.equal(expectedTextCity);
      },
    };
    dialogflowFirebaseFulfillment(req, res);
  });
});
