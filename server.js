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
    database: "employee_trackerdb"
  });
  
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Now connected to port 3306")
    start();
  });

  function start() {
      inquirer
        .prompt([
            {
                type: 'list',
                name: "request",
                message: "What would you like to do?",
                choices: [
                    'View all employees',
                    'View all employees by department',
                    'View all employees by Manager',
                    'Add Employee',
                    'Remove Employee',
                    'Update employee role',
                    'Update employee Manager',
                    'View all roles',
                    'Add Role',
                    'Remove role'
                ],           
            }
        ])
        .then(answers =>
            console.log(answers.request))
  }