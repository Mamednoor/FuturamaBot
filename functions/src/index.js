// @flow

const http = require('http');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const host = 'api.worldweatheronline.com';
const wwoApiKey = '8c0934b660db4d6a92b135511202007';

function callWeatherApi(city, date) {
  return new Promise((resolve, reject) => {
    const path = `/premium/v1/weather.ashx?key=${wwoApiKey}&format=json&num_of_days=1&q=${encodeURIComponent(city)}&date=${date}`;

    http.get({ host, path }, (res) => {
      let body = '';
      res.on('data', (d) => { body += d; });
      res.on('end', () => {
        const response = JSON.parse(body);

        // if (response.data.error) {
        //   return reject(new Error('Fail to call weather API'));
        // }

        const forecast = response.data.weather[0];
        // console.log('forecast', forecast);
        const location = response.data.request[0];
        const conditions = response.data.current_condition[0];
        const currentConditions = conditions.weatherDesc[0].value;

        const output = `Condition in city of ${location.query} are ${currentConditions} 
        with a projected high of ${forecast.maxtempC}°C and a low ${forecast.mintempC}°C on ${forecast.date}.`;

        resolve(output);
      });
      res.on('error', (error) => reject(error));
    });
  });
}

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {
  const fetchParameters = req.body.queryResult.parameters;
  // console.log(`test body:${JSON.stringify(req.body)}`);
  const city = fetchParameters['geo-city'];
  let date = '';
  if (fetchParameters.date) {
    date = fetchParameters.date;
  }

  // Call the weather API
  callWeatherApi(city, date)
    .then((output) => res.json({ fulfillmentText: output }))
    .catch(() => {
      res.json({ fulfillmentText: 'i don\'t know what you mean' });
    });
});
