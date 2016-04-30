"use strict";

const PORT = Number(process.env.PORT || 5000);
const app = require('express')();
const server = require('http').Server(app);

app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/frontendbuild/'});
});

app.get('/bundle.js', (req, res) => {
  res.sendFile('bundle.js', {root: __dirname + '/frontendbuild/'});
});

server.listen(PORT, () => console.log('server started on port', PORT));
