// Using pipes to send data

const http = require('http');
const fs = require('fs');

// sending the data to the client via web browser/ HTTP
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json' });
    
    const person = {
      name: 'Avu',
      email: 'avu@email.com',
      job: 'Developer'
    };

    res.end(JSON.stringify(person));
});

server.listen(3000, '127.0.0.1');