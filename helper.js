const user = function (data) {
  return `${data} is logged in`;
};

let id = function (id) {
  return `${id}`;
};

let email = function (email) {
  return `${email}`;
};

module.exports.user = user; // making this module/function available
module.exports.id = id;
module.exports.email = email;
