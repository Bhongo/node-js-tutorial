// Creating a server in NodeJs

const http = require('http'); // bringing in a core module

const server = http.createServer(function(req, res) { // args: request , response
    console.log(req.url); // print the URL's that are making requests
    res.writeHead(200, { 'Content-Type': 'text/plain' });  // what type of data to expect
    res.end('NodeJs is fun'); // ending the response
})

console.log('port 3000');
server.listen(1000, '127.0.0.1');  // Node will listen for requests on this server port

