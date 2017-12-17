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
    showItems();
});

var showItems = function() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Item Id: " + res[i].item_id + "\n" +  "Product Name: " + res[i].product_name + "\n" + "Department: " + res[i].department_name +  "\n" + "Price: $ " + res[i].price + "\n" + "----------------------");
        
        }

        console.log("-------------------------");
    })
};