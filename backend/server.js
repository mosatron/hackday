const express = require('express');
const app = express();
const path = require('path');
const PORT  = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname, 'db')));

app.get('/', (req, res) => {
 
 res.sendFile(__dirname + '/db/' + '01.jpg');
})

app.listen(PORT, ()=> console.log(`server is listening to port ${PORT}`));


