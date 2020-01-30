const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/plain');
  res.write('Hello HTTP');
  res.end();
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log('Erreur : le port 8080 est occupé');
  }
});

// server.on('connection', (socket) => {

// })

// server.once('listening', () => {
//   console.log('Server started');
// });

server.listen(8080, () => {
  console.log('Server started');
});
