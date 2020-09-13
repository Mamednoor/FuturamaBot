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

const host = 'futuramaapi.herokuapp.com';

const getAPI = character => new Promise((resolve, reject) => {
  const path = `/api/characters/${character}/1`;
  http.get({
    host,
    path
  }, res => {
    let body = '';
    res.on('data', d => {
      body += d;
    });
    res.on('end', () => {
      // console.log('body ', body);
      // console.log('Dialogflow body: ', JSON.stringify(body));
      const apiResponse = JSON.parse(body);
      const characters = apiResponse[0].character.replace(/\s/g, '-');
      const quotes = apiResponse[0].quote; // const images: string = apiResponse[0].image;

      const output = `Let ${characters} tell you a quote : ${quotes}`;
      return resolve(output);
    });
    res.on('error', error => {
      reject(error);
    });
  });
});

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {
  console.log('Req body: ', JSON.stringify(req.body));
  const Params = req.body.queryResult.parameters;
  const character = Params['last-name'];
  console.log('character: ', character);
  getAPI(character).then(output => {
    // res.setHeader('Content-Type', 'application/json');
    res.json({
      fulfillmentText: output
    });
  }).catch(() => {
    res.json({
      fulfillmentText: 'i don\'t understand can you repeat please'
    });
  });
});