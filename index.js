const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
);

const init = () => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: 'Select an action: ',
                choices: [
                    'View All Departments',
                    'View All Roles',
                    'View All Employees',
                    'Add a Role',
                    'Add an Employee',
                    'Update an Employee Role',
                    // 'Update Employee Managers'
                    // 'View Employees by Manager'
                    // 'View Employees by Department'
                    // 'Delete Department, Role or Employee
                    // 'View Total Utilized Budget by Department
                ],
                name: 'choice',
            },
        ])
        .then((response) => {
            switch (response) {
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View All Roles':
                    viewRoles();
                    break;
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add a Role':
                    addRole();
                    break;
                case 'Add an Employee':
                    addEmployee();
                    break;
                case 'Update an Employee Role':
                    updateEmployeeRole();
                    break;
            }
        })
        .then(() => {
            init();
        })
        .catch((err) => console.log(err));
}

const viewDepartments = () => {

}

const viewRoles = () => {

}

const viewEmployees = () => {

}

const addRole = () => {

}

const addEmployee = () => {

}

const updateEmployeeRole = () => {

}

const renderTable = (col, row, data) => {

}

init();
