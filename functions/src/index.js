// @flow

const http = require('http');
const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

const host = 'api.worldweatheronline.com';
const wwoApiKey = '8c0934b660db4d6a92b135511202007';

function callWeatherApi(city, date) {
  return new Promise((resolve, reject) => {
    // Create the path for the HTTP request to get the weather
    const path = `/premium/v1/weather.ashx?key=${wwoApiKey}&format=json&num_of_days=1&q=${encodeURIComponent(city)}&date=${date}`;

    // Make the HTTP request to get the weather
    http.get({ host, path }, (res) => {
      let body = ''; // var to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
        // After all the data has been received parse the JSON for desired data
        const response = JSON.parse(body);
        const forecast = response.data.weather[0];
        const location = response.data.request[0];
        const conditions = response.data.current_condition[0];
        const currentConditions = conditions.weatherDesc[0].value;

        // Create response
        const output = `Current conditions in the ${location.type} 
        ${location.query} are ${currentConditions} with a projected high of
        ${forecast.maxtempC}°C and a low of 
        ${forecast.mintempC}°C on ${forecast.date}.`;

        // Resolve the promise with the output text
        resolve(output);
      });
      res.on('error', (error) => {
        reject(error);
      });
    });
  });
}

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((req, res) => {
  // Get the city and date from the request
  // console.log(`test body:${JSON.stringify(req.body)}`);
  const city = req.body.queryResult.parameters['geo-city']; // city is a required param
  // Get the date for the weather forecast (if present)
  let date = '';
  if (req.body.queryResult.parameters.date) {
    date = req.body.queryResult.parameters.date;
  }

  // Call the weather API
  callWeatherApi(city, date)
    .then((output) => res.json({ fulfillmentText: output }))
    .catch(() => {
      res.send({ fulfillmentText: 'I don\'t know the weather but I hope it\'s good!' });
    });
});
