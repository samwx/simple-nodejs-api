const mysql = require('promise-mysql');

// Use POOL to reuse connections
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'dad-test',
  connectionLimit: 10
});

function query() {
  return pool.query.apply(pool, arguments);
}

exports = {
  query: query
}
