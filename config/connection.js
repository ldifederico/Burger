var mysql = require("mysql");
var connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'linda123',
    database: 'f5kccbo21wrgh472'
  });  
};

connection.connect(function(err) {
  if (err) {
    return;
  }
});

module.exports = connection;

