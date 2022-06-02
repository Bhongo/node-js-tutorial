// Reading and writing to files in NodeJs

const fs = require('fs');

// Reading the file
// const text = fs.readFileSync('read-me.txt', 'utf-8'); // file name and character encoding
// console.log(text);

//===================
// Writing to a file
//==================

// const newText = fs.writeFileSync('write.txt', text); // the file we are writing to and the text we are writing
// console.log(newText);

//===================================
// Writing to a file - the Async Way
//===================================

fs.readFile('read-me.txt', 'utf-8', function (error, data) {
  fs.writeFile('write.txt', data, function (error) {
    if (error) {
      console.log(error);
    }
  });
});
