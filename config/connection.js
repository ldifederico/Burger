var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'linda123',
    database: 'burgers_db'
  });  
};

connection.connect(function(err) {
  if (err) {
    return;
  }
});

module.exports = connection;

