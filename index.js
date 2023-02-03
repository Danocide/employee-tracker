const connection = require('./db/connection')
const inquirer = require('inquirer')
require('console.table')

if (connection) {
    console.log("Connection Made")
    mainQuestion()
}

function mainQuestion() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'mainQuestion',
            message: "What would you like to do?",
            choices: ['View All', 'View Employees', 'View Departments', 'Add Department', 'Add Role', 'Add Employee', 'Update Employee', 'Quit']
        }
    ]).then(answer => {
        switch (answer.mainQuestion) {
            case 'View All':
                viewAll()
                break;
            case 'View Employees':
                viewEmployees()
                break;
            case 'View Departments':
                viewDeparments()
                break;
            case 'Add Department':
                addDepartment()
                break;
            case 'Add Role':
                addRole()
                break;
            case 'Add Employee':
                addEmployee()
                break;
            case 'Update Employee':
                updateEmployeeRole()
                break;
            default:
                connection.end()
        }
    })
};


function viewAll() {
    console.log('View roles, salary, and department name')
    connection.query('SELECT role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id', (err, data) => {
        if (err) throw err;
        console.log()
        console.table(data)
    })

    mainQuestion()
}

function viewAll() {
    console.log('View roles, salary, and department name')
    connection.query('SELECT role.title, role.salary, department.name FROM role JOIN department ON role.department_id = department.id', (err, data) => {
        if (err) throw err;
        console.log()
        console.table(data)
    })

    mainQuestion()
}

function viewEmployees() {
    console.log('view employees table');
    connection.query('SELECT * FROM employee', (err, data) => {
        if (err) throw err;
        console.log()
        console.table(data)
    })
    mainQuestion()
}

function viewDeparments() {
    connection.query("SELECT * FROM department", (err, data) => {
        if (err) throw err;
        console.log()
        console.table(data)
    })
    mainQuestion()
}

function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'newDepartment',
            message: "What is your new department's name?"
        }
    ])
        .then(answer => {
            console.log(answer);
            connection.query(`INSERT INTO department (name) VALUES('${answer.newDepartment}')`, (err, data) => {

                if (err) throw err;
                console.log("New department added")
                mainQuestion()
            })
        });
};
function addRole() {
    console.log('Add role to role table')
    inquirer.prompt([
        {
            type: 'input',
            name: 'role',
            message: 'What is the title for the new role?',
        },
        {
            type: 'input',
            name: 'salary',
            message: 'What is the salary for this new role?',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the department id for this new role?',
        }
    ])
        .then(answer => {
            connect.query(`INSERT INTO role VALUES(id,'${answer.role}', ${answer.salary}, ${answer.id})`, (err, data) => {
                if (err) throw err;
                console.log('')
                viewRoles()

            })
        })
}