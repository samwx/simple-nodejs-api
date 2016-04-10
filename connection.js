var exports = module.exports = {};

var mysql = require('mysql'),
    connection = null;


exports.startConnection = function(){
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dad-test'
  });

  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }

    console.log('connected as id ' + connection.threadId);
  });

  return connection;
};

exports.closeConnection = function() {
  connection.end();
  console.log('connection was closed');
};
