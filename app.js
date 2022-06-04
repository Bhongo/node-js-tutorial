// Using the Express Module in NodeJs

const express = require('express'); // bring in the module
const bodyParser = require('body-parser'); // bring in the module


const app = express(); // setting up the express application

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs'); // allowing the page to bring in HTML

app.use('/assets', express.static('assets')); // using Middleware
  // console.log(req.url);
  // next();
//})

// Using the HTTP Express methods
app.get('/', function (req, res) {
  // res.send('Home page');
  // res.sendFile(__dir + '/index.html');
  res.render('index'); // No need to specify the path, because it know automatiocally to go the views folder
});

app.get('/about', function (req, res) {
  // Express knows the data is a string thus, no need for content type
  // res.send('About page');
  // res.sendFile(__dir + '/about.html');
  //console.log(req.query);
  res.render('about', { qs: req.query });
});

app.post('/about', urlencodedParser, function (req, res) {
  // console.log(req.body);
  res.render('about-success', { data: req.body });
});

app.get('/profile/:name', function (req, res) {
  // res.send('The profile name is ' + req.params.name);
  const data = {
    age: 30,
    job: 'Node Developer',
    friends: ['sarah', 'jane', 'willma'],
  };
  res.render('profile', { person: req.params.name, data });
});

app.listen(3000); // the port to use for running this app in the browser
