// Serves as the main backend server for eve industry manager

const express = require('express')
const app = express()
const port = 3000;

const cors = require("cors");
app.use(cors());

// const eveConf = require('../eve.conf');
// const secret = eveConf.secretKey;

// const https = require('https')
const axios = require('axios');

const loginToEve = async (code) => {
  const encodedString = new Buffer.from(code + ':' + 'sqMWI2O8J4LTrMYkhtE7JwZgGWpwbkldZIRs1iOY').toString('base64')
  console.log(code, encodedString)
  var clientOptions = {
    url: 'login.eveonline.com/v2/oauth/token',
    headers: {
      'Authorization': `Basic ${encodedString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      Host: 'login.eveonline.com'
    }
  }
  // https.request(clientOptions, (res) => {
  //   return res;
  // })
  await axios({
    url: 'https://login.eveonline.com/v2/oauth/token',
    method: 'POST',
    headers: clientOptions.headers
  })
    .then(response => console.log(response))
    .catch(e => console.log(e))
}

app.get('/', (req, res) => res.send("Hey world"))

app.get('/login/:code', (req, res) => {
  res.send(loginToEve((req.params.code)));
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
