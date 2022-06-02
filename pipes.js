// Using pipes to send data

const http = require('http');
const fs = require('fs');

//const writeStream = fs.createWriteStream(__dirname + '/write-pipe.txt', 'utf-8'); // writing data in streams. It is faster than the traditional read/write to file 


// sending the data to the client via web browser/ HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain' });
    const readStream = fs.createReadStream(__dirname + '/read-data.txt', 'utf-8'); // find the file in this directory

    readStream.pipe(res);
});

server.listen(3000, '127.0.0.1');