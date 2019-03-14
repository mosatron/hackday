const path = require('path');
const express = require('express');
const app = express();
const fetch = require('node-fetch');
const PORT = 8080;
const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: false }))
// app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));