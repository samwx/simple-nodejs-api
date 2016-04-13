const connection = require('./connection.js');

/**
 * Fields: id, name
 */
function getUsers (data) {
  // return Promise.resolve([{name: 'Jean Claude Van Dame Da Silva'}])
  return connection.query('SELECT * FROM users');
}

module.exports = {
  getUsers: getUsers
}
