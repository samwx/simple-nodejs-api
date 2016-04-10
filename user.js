var exports    = module.exports = {},
    connection = require('./connection.js');


/**
 *
 * Fields: id, name
 *
 */

exports.getUsers = function(data) {
  conn = connection.startConnection();

  var q = 'SELECT * FROM users';
  conn.query(q, function(err, rows, fields){
    if (err) throw err;

    console.log(rows[0]);
    return rows;
  });

  conn.end();
};
