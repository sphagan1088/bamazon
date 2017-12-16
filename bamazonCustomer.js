var mysql = require ("mysql");

var inquirer = require ("inquirer");

//connection info for mysql
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon_db"
});

//Connect to mysql server and sql database
connection.connect(function(err){
    if (err) throw err;
    start();
});

// function start() {
//     inquirer
//         .prompt({
//             name:
//         })
// }