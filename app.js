// Using the Express Module in NodeJs

const express = require('express');  // bring in the module

const app = express(); // setting up the express application

// Using the HTTP Express methods

app.get('/', function(req, res) {
   res.send('Home page');
});

app.get('/about', function(req, res) { // Express knows the data is a string thus, no need for content type
  res.send('About page');
});

app.get('/profile/:name', function(req, res){
  res.send('The profile name is ' + req.params.name);
});

app.listen(3000); // the port to use for running this app in the browser