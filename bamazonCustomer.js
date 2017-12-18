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

//Display products for sale to the user in the console
var showItems = function() {
    var query = "SELECT * FROM products";
    connection.query(query, function(err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log("Item Id: " + res[i].item_id + "\n" +  "Product Name: " + res[i].product_name + "\n" + "Department: " + res[i].department_name +  "\n" + "Price: $ " + res[i].price + "\n" + "Quantity in Stock: " + res[i].stock_quantity + "\n" + "----------------------");
        
        }

        console.log("-------------------------");
         userPrompt();
    })
};

//Keep getting errors in this section when I run it, maybe a scope issue??
//Prompts the user for id number and how many items they would like to purchase
function userPrompt() {
    inquirer
        .prompt([
            {
                name: "idNum",
                message: "Please enter an id number for the product you would like to purchase.",
                type: "input"
            },
            {
                name:"quantity",
                message: "How many would you like to purchase?",
                type: "input"
            }
        ])
        .then(function(input) {
            if (res[i].stock_quantity < input.quantity) {
               
                var item = input.item_id;
                var quantity = input.stock_quantity;

                if(quantity <= data.stock_quantity) {
                    console.log("Thank you for placing your order with Bamazon!")
                }

                var update = "UPDATE products SET stock_quantity = " + (data.stock_quantity - quantity) + "WHERE item_id = " + item;

                connection.query(update, function(err, data) {
                    if(err) throw err;

                    console.log("Your order total is $" + data.price * quantity);
                    console.log("----------------------------------------")
                })
            }
            else {
                console.log("We're sorry we have insufficient stock to fill your order, please modify your quantity")
                console.log("--------------------------------------");
                userPrompt();
                
            }
        });

}

