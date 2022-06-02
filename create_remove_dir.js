const fs = require('fs');

//== Deleting a file - It works:

// fs.unlink('write.txt', (error) => {
//     console.log(error);
// });

// == Making a new directory - It works:

// fs.mkdirSync('my-folder');
 fs.rmdirSync('my-folder');  // deleting the directory - it works

// Creating a folder directory using a Async method. Async methods must be callback functions
// We are creating a directory, then reading data froma an existing file and then writing the read data to the newly created file:

fs.mkdir('my-folder'), () => {
  fs.readFile('read-me.txt', 'utf-8', (error,data) => {
     fs.writeFile('./my-folder/write-me.txt', data, () => {  // writing the read data to the new file

     })
  })
};
