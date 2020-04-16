// Serves as the main backend server for eve industry manager

const express = require('express')
const app = express()
const port = 3000;

app.get('/', (req, res) => res.send("Hey world"))

app.listen(port, () => console.log(`Server listening at http://localhost:${port}`))
