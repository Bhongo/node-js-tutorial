// Using the Express Module in NodeJs

const express = require('express');  // bring in the module

const app = express(); // setting up the express application

app.set('view engine', 'ejs'); // allowing the page to bring in HTML

// Using the HTTP Express methods

app.get('/', function(req, res) {
  // res.send('Home page');
  res.sendFile(__dir + '/index.html');
});

app.get('/about', function(req, res) { // Express knows the data is a string thus, no need for content type
  // res.send('About page');
  res.sendFile(__dir + '/about.html');
});

app.get('/profile/:name', function(req, res){
  // res.send('The profile name is ' + req.params.name);
  const data = {age: 30, job: 'Node Developer', friends: ['sarah', 'jane', 'willma']}
  res.render('profile', {person: req.params.name, data});
});

app.listen(3000); // the port to use for running this app in the browser