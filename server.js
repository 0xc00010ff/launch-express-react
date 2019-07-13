const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const apiRoutes = require('./api');

// Static file serving
app.use(express.static(path.join(__dirname, 'build')));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Heartbeat
app.get('/ping', (req, res) => {
  console.log('ping!');
  return res.send('pong');
});

// API proxy
app.use('/api', apiRoutes);

// Main web app
app.get('/*', (req, res) => {
  console.log('GET /');
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 8765;
app.listen(port);

console.log(`Serving on port ${port}`);
