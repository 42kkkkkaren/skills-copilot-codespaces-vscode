// Create web server
// Run: node comments.js
// Output: http://localhost:3000/

const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/comments', (req, res) => {
  console.log(req.body);
  res.send('Thanks for your comment!');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000/');
});