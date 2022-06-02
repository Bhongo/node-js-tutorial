const http = require('http');
const fs = require('fs');

const readStream = fs.createReadStream(__dirname + '/read-data.txt', 'utf-8'); // find the file in this directory
const writeStream = fs.createWriteStream(__dirname + '/write-data.txt', 'utf-8'); // writing data in streams. It is faster than the traditional read/write to file 

readStream.on('data', (chunk) => {
  console.log('new data received');
  console.log(chunk);
  writeStream.write(chunk);
});