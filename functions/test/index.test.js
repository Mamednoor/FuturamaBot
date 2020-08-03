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

// // @Flow

// const http = require('http');
// const functions = require('firebase-functions');
// const admin = require('firebase-admin');

// admin.initializeApp();

// /**
// * @param {Object} options JSON configuration.
// * @param {Object} options.req HTTP request object.
// * @param {Object} options.res HTTP response object.
// * @param {Object} characters get the character
// * @return {promise} Promise
// */

// const getAPI = (character) => new Promise((resolve, reject) => {
//   const host: string = `futuramaapi.herokuapp.com/api/characters/${character}/1`;

//   http.get(host, (error, res) => {
//     let body: string = '';
//     res.on('data', (d) => { body += d; });
//     res.on('end', () => {
//       // console.log('body ', body);
//       // console.log('Dialogflow body: ', JSON.stringify(body));

//       const response = JSON.parse(body);
//       // console.log(`  Query: ${response}`);
//       const characters: string = response.character;
//       const quotes: string = response.quote;

//       const output = `test ${quotes.quote} ${quotes.character} ${quotes} -- test2 ${characters}  ${characters.character}`;
//       return resolve(output);
//     });
//     res.on('error', (e) => reject(e));
//   });
// });

// exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {
//   console.log('Request body: ', JSON.stringify(req.body));
//   const Params = req.body.queryResult.parameters;
//   const character = Params['last-name'];

//   // console.log('character: ', JSON.stringify(character));
//   getAPI(character)
//     .then((output) => {
//       res.json({ fulfillmentText: output });
//     }).catch(() => {
//       res.json({ fulfillmentText: 'i don\'t understand can you repeat please' });
//     });
// });
