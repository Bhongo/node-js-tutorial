// Routing in NodeJs

const http = require('http');
const fs = require('fs');

// sending the data to the client via web browser/ HTTP
const server = http.createServer((req, res) => {
  if (req.url === '/home' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'application/html' });
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  }
  else if (req.url === '/about' || req.url === '/') {
    res.writeHead(200, {'Content-Type': 'application/html' });
    fs.createReadStream(__dirname + '/about.html').pipe(res);
  } 
  else {
    res.writeHead(404, {'Content-Type': 'application/html' });
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }
});

server.listen(3000, '127.0.0.1');