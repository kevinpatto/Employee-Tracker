const inquirer = require('inquirer');
const mysql = require('mysql2');

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rooters',
        database: 'employees_db'
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
            // console.log(response.choice);
            return viewDepartments()
                .then(() => {
                    init();
                })
                .catch((err) => console.log(err));
            // switch (response.choice) {
            //     case 'View All Departments':
            //         viewDepartments();
            //         break;
            //     case 'View All Roles':
            //         viewRoles();
            //         break;
            //     case 'View All Employees':
            //         viewEmployees();
            //         break;
            //     case 'Add a Role':
            //         addRole();
            //         break;
            //     case 'Add an Employee':
            //         addEmployee();
            //         break;
            //     case 'Update an Employee Role':
            //         updateEmployeeRole();
            //         break;
            // }
        })
        .catch((err) => console.log(err));
}

const viewDepartments = () => {
    db.query('SELECT * FROM departments', function (err, results) {
        console.log(results);
    });
    // .promise()
    // .then(() => renderTable(results, ['id', 'name']));
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

const renderTable = (data, col) => {
    let columns = '';
    let columnBreak = '';

    for (let i = 0; i < col.length; i++) {
        switch (col[i]) {
            case 'name':
                columns.concat(' name         ')
                columnBreak.concat(' ____________ ');
                break;
            case 'title':
                columns.concat(' title        ')
                columnBreak.concat(' ____________ ');
                break;
            case 'first_name':
                columns.concat(' first name       ')
                columnBreak.concat(' ________________ ');
                break;
            case 'last_name':
                columns.concat(' last name        ')
                columnBreak.concat(' ________________ ');
                break;
            case 'id':
                columns.concat(' id ');
                columnBreak.concat(' __ ');
                break;
            case 'department id':
                columns.concat(' department id ');
                columnBreak.concat(' _____________ ');
                break;
            case 'role id':
                columns.concat(' role id ');
                columnBreak.concat(' _______ ');
                break;
            case 'department':
                columns.concat(' department   ');
                columnBreak.concat(' ____________ ');
                break;
            case 'salary':
                columns.concat(' salary  ');
                columnBreak.concat(' _______ ');
                break;
        }
    }

    for (let i = 0; i < data.length; i++) {

    }
}

init();
