var inquirer = require("inquirer");
var mysql = require("mysql");
var table = require("console.table");

var connection = mysql.createConnection({
    host: "localhost",
  
    //Port
    port: 3306,
  
    //username
    user: "root",
  
    //password
    password: "root",
    database: "top_songsDB"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
  });