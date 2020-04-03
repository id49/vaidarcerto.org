const functions = require('firebase-functions');

const express = require('express')
const cors = require('cors')
const app = express()

const cities = require('./cities.json')

app.use(cors({ origin: true }))

app.get('/city/:state', (req, res) => {
  const filteredByState = cities
                            .filter(city => city.state === req.params.state)
                            .filter(city => city.name.toLowerCase().search(req.query.str.toLowerCase()) >=0)
                            .map(city => {
                              return {
                                value: city.slug,
                                label: city.name + ' ('+req.params.state+')'
                              }
                            })
  res.send(filteredByState)
})


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
/*
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log(request.body.toString())
  response.send("Hello from Firebase!");
});
*/

exports.api = functions.https.onRequest(app)
