const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'millene',
  password: 12345678,
  database: 'users_crud',
});

module.exports = connection;