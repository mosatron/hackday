const express = require('express');
const app = express();
const fetch = require('node-fetch');
const PORT = 8080;


app.get('/', (req, res) => {

  res.send(fetch('http://localhost:3000/'))
} );



app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));