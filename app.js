// run `node index.js` in the terminal

//console.log(`Hello Node.js v${process.versions.node}!`);
//console.log("Hello World");

// ----
// Globals in Node: It gives us access to certain methods
// ----

setTimeout(() => {
  console.log('Hi there after 3 seconds');
}, 3000); // 3 seconds - displays method (console.log()) after 3 seconds

setInterval(() => {
  console.log('Hi there');
}, 2000); // displays the message every 2 seconds

//====================================
// == Example 2 using a variable == //
//====================================

let count = 0; // declaring a variable

setInterval(() => {
  count = count + 2;
  console.log(`${count} seconds have passed!`);
}, 2000); // every 2 seconds
