const connection = require('./connection.js');

/**
 *
 * Fields: id, name
 *
 */

exports.getUsers = function(data) {
  return connection.query('SELECT * FROM users');
};
