// NodeJs: Built in functions

const events = require('events');
const util = require('util');

// const myEmitter = new events.EventEmitter();

// myEmitter.on('test', function (arg) {
//   console.log(arg);
// });

// myEmitter.emit('test', 'hello NodeJs'); // emit function name, argument

// Using the util function
const teams = function (name) {
  this.name = name;
};

util.inherits(teams, events.EventEmitter);
const Arsenal = new teams('Arsenal');
const Juventus = new teams('Juventus');
const Chelsea = new teams('Chelsea');

const teamArray = [Arsenal, Juventus, Chelsea];

teamArray.forEach((team) => {
  team.on('nation', function (nation) {
    console.log(team.name + ' is a ' + nation + ' football club');
  });
});

Arsenal.emit('nation', 'English');
Juventus.emit('nation', 'Italian');
Chelsea.emit('nation', 'English');
