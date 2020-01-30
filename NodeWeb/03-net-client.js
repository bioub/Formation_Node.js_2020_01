const net = require('net');

const socket = net.connect(80, 'example.org');
socket.pipe(process.stdout);

// Requete HTTP
// GET / HTTP/1.1\r\n
// Host: example.org\r\n
// User-agent: Node.js\r\n
// \r\n

socket.write('GET / HTTP/1.1\r\n');
socket.write('Host: example.org\r\n');
socket.write('User-agent: Node.js\r\n');
socket.write('\r\n');

// Reponse HTTP
// HTTP/1.1 200 OK
// Age: 571341
// Cache-Control: max-age=604800
// Content-Type: text/html; charset=UTF-8
// Date: Thu, 30 Jan 2020 13:29:16 GMT
// Etag: "3147526947+gzip+ident"
// Expires: Thu, 06 Feb 2020 13:29:16 GMT
// Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
// Server: ECS (dcb/7EEA)
// Vary: Accept-Encoding
// X-Cache: HIT
// Content-Length: 1256

// <!doctype html>
// <html>...</html>
