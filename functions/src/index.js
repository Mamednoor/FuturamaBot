// @Flow

const http = require('http');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

/**
* @param {Object} options JSON configuration.
* @param {Object} options.req HTTP request object.
* @param {Object} options.res HTTP response object.
* @param {Array} characters get the character
* @return {promise} Promise
*/

const getAPI = (character) => new Promise((resolve, reject) => {
  const host: string = `futuramaapi.herokuapp.com/api/characters/${character}/1`;

  http.get(host, (res) => {
    let body: string = '';
    res.on('data', (d) => { body += d; });

    res.on('end', () => {
      // console.log('body ', body);
      // console.log('Dialogflow body: ', JSON.stringify(body));
      const apiResponse = JSON.parse(body);
      const characters: string = apiResponse.data.request[0];
      const quotes: string = apiResponse.data[0].quote;

      const output = `test ${characters} ${quotes} `;
      return resolve(output);
    });
    res.on('error', (error) => {
      reject(error);
    });
  });
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {
  console.log('Req body: ', JSON.stringify(req.body));
  const Params = req.body.queryResult.parameters;
  const character = Params['last-name'];

  // console.log('character: ', JSON.stringify(character));
  getAPI(character)
    .then((output) => {
      res.setHeader('Content-Type', 'application/json');
      res.json({ fulfillmentText: output });
    }).catch(() => {
      res.json({ fulfillmentText: 'i don\'t understand can you repeat please' });
    });
});
