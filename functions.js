// declaring functions in normal JavaScript

function orange() {
  console.log('The color is orange');
}

orange(); // calling the function

//=================================
//== Creating function expressions
//=================================

let red = function () {
  console.log('greetings from inside a the function expression');
};

red(); // calling the standard function expression

//=============================================
//== using a function to call another function
//=============================================

function callbackFunc(func) {
  // expecting a function to be passed as an argument
  func();
}

let blue = function () {
  console.log('callback function calling this function');
};

callbackFunc(blue); // These are used a lot in NodeJs
