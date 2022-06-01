const user = function (data) {
  return `${data} is logged in`;
};

let id = function (id) {
  return `${id}`;
};

let email = function (email) {
  return `${email}`;
};

// Newer ES6 way
module.export = {
  // it can also be done like this ->  user: user
  user,
  id,
  email,
};

// Old / long way of doing it this

// module.exports.user = user; // making this module/function available
// module.exports.id = id;
// module.exports.email = email;
