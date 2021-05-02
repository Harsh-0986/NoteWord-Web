const express = require('express');
const app = express();
const http = require('https');
const server = http.createServer(app);
const io = require("socket.io")(3002,{
  cors:{
    origin: 'https://3000-olive-mouse-9jgw3b73.ws-us04.gitpod.io/',
    methods: ['GET', 'POST']
  }
})



// app.get('/', (req, res) => {
//   res.send('<h1>Hello world</h1>');
// });

// server.listen(3002, () => {
//   console.log('listening on *:3001');
//   // console.log("Connected")
// });


io.on('connection', socket => {
    console.log("Connected")
})