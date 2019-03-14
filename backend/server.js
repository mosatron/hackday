const express = require('express');
const app = express();
const path = require('path');
const PORT  = 3000;
const cors = require('cors');


app.use(cors());
app.use(express.static(path.join(__dirname, 'db')));

app.get('/thumbs/:id', (req, res) => {
  const id = req.params.id;
  res.sendFile(__dirname + `/db/thumbnails/${id}_tn.jpg`);
})
 
// app.get('/:id', (req, res) => {
//   const id = req.params.id;
//   res.sendFile(__dirname + `/db/thumbnails/${id}_tn.jpg`);
// })

app.listen(PORT, ()=> console.log(`server is listening to port ${PORT}`));


