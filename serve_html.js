// Using pipes to send data

const http = require('http');
const fs = require('fs');

// sending the data to the client via web browser/ HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html' });
    const readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8'); // find the file in this directory

    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');