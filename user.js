const connection = require('./connection.js');

/**
 * Fields: id, name
 */
function getUsers (data) {
  return connection.query('SELECT * FROM users');
}

module.exports = {
  getUsers: getUsers
}
