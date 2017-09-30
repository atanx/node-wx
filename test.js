var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : '172.16.0.30',
  user     : 'root',
  password : 'root',
  database : 'spider'
});
 
connection.connect();
 
connection.query('SELECT * from site', function (error, results, fields) {
  if (error) throw error;
    newFunction(results);
});

function newFunction(results) {
    console.log('The solution is: ', results[0].solution);
}


 