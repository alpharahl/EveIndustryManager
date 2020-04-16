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
const qs = require('querystring');

const loginToEve = async (code) => {
  const encodedString = new Buffer.from("eb2f857d6cd54c2fb4b9d8462f8920fa" + ':' + 'sqMWI2O8J4LTrMYkhtE7JwZgGWpwbkldZIRs1iOY').toString('base64')
  console.log(code, encodedString)
  const data = {
    grant_type: 'authorization_code',
    code: code
  }
  const config = {
    headers: {
      'Authorization': `Basic ${encodedString}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      Host: 'login.eveonline.com'
    }
  }
  const url = 'https://login.eveonline.com/v2/oauth/token'
  await axios.post(url, qs.stringify(data), config).then(response => console.log(response))
    .catch(e => console.log(e))
}

app.get('/', (req, res) => res.send("Hey world"))

app.get('/login/:code', (req, res) => {
  res.send(loginToEve((req.params.code)));
})

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
