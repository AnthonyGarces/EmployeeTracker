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
                //Done
                'View all employees',
                'View all employees by department',
                'View all employees by Manager',
                'Add Employee',
                'Remove Employee',
                'Update employee role',
                'Update employee Manager',
                //Done
                'View all roles',
                'Add Role',
                'Remove role',
                //Done
                'View departments',
                //Done
                'Add departments',
                //Done
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
        
        case "Add departments":
            addDepartment();
            break;

        case "Remove departments":
            removeDepartment();
            break;
        }
    })       
}

function getEmployees() {
connection.query('SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.Name FROM employee LEFT JOIN role ON role_id = role.ID LEFT JOIN department ON department_id = department.ID', function(err, res) {
    if (err) throw err;
    console.table(res);
    newRequest()
})
}

function getRoles() {
connection.query("SELECT role.ID, role.title, role.salary, department.Name FROM role LEFT JOIN department ON department_id = department.id", function(err, res) {
    if (err) throw err;
    console.table(res);
    newRequest();
})
}

function getDepartments() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        console.table(res);
        newRequest();
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

function addDepartment() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: "newdepartment",
                message: "Type the name of the new department",
            }
        ])
        .then(data => {
            connection.query(
                `INSERT INTO department (Name)
                VALUES ("${data.newdepartment}")`,
                function(err) {
                    if (err) throw err;
                    console.log("Department Added successfully!")
                }
            );
            newRequest();
        })
}

function removeDepartment() {
    connection.query('SELECT * FROM department', function (err, res) {
        if (err) throw err;
        var choicesList = [];
        for (var i = 0; i < res.length; i++) {
            choicesList.push(res[i].Name);
        };
        
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "baddepartment",
                    message: "Which department would you like to delete?",
                    choices: choicesList,
                    
                }
            ])
            .then(data => {
                connection.query(
                    `DELETE FROM department
                    WHERE Name = "${data.baddepartment}";`
                    
                    , function (err, res) {
                        if (err) throw err;
                        console.log("Here is the updated table");
                        getDepartments()
                        
                    }
                )
            })
    })
}

function addEmployee() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: "first_name",
                message: "Enter the employee's first name"
            }, 
            {
                type: 'input',
                name: "last_name",
                message: "Enter the employee's last name"
            },
            {
                type: 'input',
                name: "super",
                message: "Enter the employee's superviser"
            }
        ])
        .then(data => {
            console.log(data.first_name, data.last_name, data.super);
            connection.query(

            )
        })
}