const { expect } = require('chai');
const { dialogflowFirebaseFulfillment } = require('../src/index.js');

describe('test firebaseFunction', () => {
  it('character', () => {
    const req = {
      body: {
        queryResult: {
          parameters: {
            'last-name': 'Bender',
            // quote: 'At last, war has made me into a man. Weeeeee!',
          },
        },
      },
    };

    const res = {
      json: (data) => {
        expect(data).to.be.a('object');
        expect(data.fulfillmentText).to.be.a('string');
        expect(data.fulfillmentText).to.contain('can you repeat');
        expect(req).to.be.a('object');
      },
    };
    dialogflowFirebaseFulfillment(req, res);
  });
});
