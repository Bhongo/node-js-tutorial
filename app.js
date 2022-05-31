// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);
//console.log("Hello World");

// ----
// Globals in Node: It gives us access to certain methods
// ----

// setTimeout(() => {
//   console.log('Hi there after 3 seconds');
// }, 3000); // 3 seconds - displays method (console.log()) after 3 seconds

// setInterval(() => {
//   console.log('Hi there');
// }, 2000); // displays the message every 2 seconds

//====================================
// == Example 2 using a variable == //
//====================================

// let count = 0; // declaring a variable

// setInterval(() => {
//   count = count + 2;
//   console.log(`${count} seconds have passed!`);
// }, 2000); // every 2 seconds

// // Ending a process using ClearInterval

// let newcount = 0;

// const timer = setInterval(() => {
//   newcount = newcount + 2;
//   console.log(`${newcount} seconds have passed!`);
//   if (newcount > 6) {
//     clearInterval(timer);
//   }
// }, 2000); // every 2 seconds

//=======================================================
// == Example 3 using node to get my file directory == //
//=======================================================

console.log(__dirname); // method to get the directory (standard way)

var myDir = __dirname;
console.log(myDir); // the dynamic way of getting the directory

console.log(__filename); // gets the file name and directory
