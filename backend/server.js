"use strict";

const PORT = Number(process.env.PORT || 5000);
const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

let streams = [];

// express routes
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/frontendbuild/'});
});

app.get('/bundle.js', (req, res) => {
  res.sendFile('bundle.js', {root: __dirname + '/frontendbuild/'});
});

// socket events
io.on('connection', socket => {
  // start streaming event
  socket.on('start-stream', data => {
    console.log('dsadsa', data);
    // TODO: add the webRTC code to the streams array
    socket.broadcast.emit('streamlist-update', {
      streams: streams
    });
  });

  // get streams event
  socket.on('get-streams', () => {
    socket.emit('streamlist-update', {
      streams: streams
    });
  });
});

server.listen(PORT, () => console.log('server started on port', PORT));
