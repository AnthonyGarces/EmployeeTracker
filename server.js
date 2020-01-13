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
                'Remove role',
                'View departments',
                'Add departments',
                'Remove departments'
            ],           
        }
    ])
    .then(answers => {
        switch (answers.request) {
        case "View all employees":
            getEmployees();
            break;
        
        case "View all roles":
            getRoles();
            break;
        
        case "View departments":
            getDepartments();
            break;
        
        }
    })       
}

function getEmployees() {
connection.query("SELECT * FROM employee", function(err, res) {
    if (err) throw err;
    console.table(res);
    newRequest()
})
}

function getRole() {
connection.query("SELECT * FROM role", function(err, res) {
    if (err) throw err;
    console.table(res)
})
}

function getDepartments() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.table(res)
    })
}

function newRequest() {
    inquirer
        .prompt([
            {
                type: 'confirm',
                name: 'Continue',
                message: "Do you have another request?",
            }
        ])
        .then(data => {
            switch (data.Continue) {
                case false:
                    console.log("Thanks for using our service!");
                    connection.end();
                    break;

                    case true:
                        start()
            }
        })
}