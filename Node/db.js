const mysql = require('mysql');
 const connection = mysql.createConnection({
     host: 'localhost',
     user: 'root',
     database: 'progweb'
 });

 module.exports = connection;