const { expect, assert } = require('chai');
const { dialogflowFirebaseFulfillment } = require('../src/index.js');

describe('test firebaseFunction', () => {
  it('character', () => {
    const req = {
      body: {
        queryResult: {
          parameters: {
            'last-name': 'bender',
            // quote: 'At last, war has made me into a man. Weeeeee!',
          },
        },
      },
    };

    const res = {
      json: (data) => {
        expect(res.statusCode).toEqual(200);
        expect(data).to.be.a('object');
        expect(data.fulfillmentText).to.be.a('string');
        expect(data.fulfillmentText).to.contain('can you repeat');
        expect(req).to.be.a('object');
        assert.strictEqual(typeof body, 'string');
        // console.log('data test', res.data);
        // console.log('error console', data.error);
      },
    };
    dialogflowFirebaseFulfillment(req, res);
  });
});
