const net = require('net');

const server = net.createServer((socket) => {
  socket.pipe(process.stdout);
  socket.write('HTTP/1.1 200 OK\r\n');
  socket.write('Content-type: text/plain\r\n');
  socket.write('\r\n');
  socket.write('Hello, world\r\n');
  socket.end();
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
