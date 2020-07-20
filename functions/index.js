// @flow

const express = require("express")
const app = express()
const functions = require('firebase-functions');
const admin = require("firebase-admin");
admin.initializeApp();

app.get("/", (request, response) => {
  response.send("Bienvenue sur Express");
});

app.listen(process.env.PORT || 8080, (err) => {
  if (err) {
    throw new Error("Something bad happened...");
  }
  console.log("Server is up");
});


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
