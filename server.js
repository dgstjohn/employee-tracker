const inquirer = require('inquirer');
const consoleTable = require('console.table');

const questions = [
    {
        type: 'list',
        name: 'intro',
        message: 'What would you like to do?',
        choices: ['View All Departments', 'View All Roles', 'View All Employees', 'Add A Department', 'Add A Role', 'Add An Employee', 'Update An Employee Role']
    }
];

const addDepartment = [
    {
        type: 'input',
        name: 'newDepartment',
        message: 'Which department would you like to add?'
    }
]

const addRole = [
    {
        type: 'input',
        name: 'newRole',
        message: 'What is the name of the new role?'
    },
    {
        type: 'input',
        name: 'salary',
        message: 'What is the salary for the new role?'
    },
    {
        type: 'input',
        name:: 'department',
        message: 'Which department will the new role work in?',
    }
]

const addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message:
    },
    {
        type: 'input',
        name: 'lastName',
        message:
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: '',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead']
    },
    {
        type: 'input',
        name: 'manager',
        message: 'Who will manage the new employee?'
    }
]

const updateRole = [
    {
        type: 'list',
        name: 'changeEmployee',
        message: '',
        choices: // pull choices from most current employee table update
    },
    {
        type: 'list',
        name: 'changedRole',
        message: 'What will their new role be?',
        choices: // pull choices from roles table
    }
]



function init() => {
    inquirer.prompt(questions)
        .then(answers => {
            if (questions.choices === 'View All Departments') {
                console.table(department);
                init();
            }
            else if (questions.choices === 'View All Roles') {
                console.table(roles);
                init();
            }
            else if (questions.choices === 'View All Employees') {
                console.table(employees);
                init()
            }
            else if (questions.choices === 'Add A Department') {
                inquirer.prompt(addDepartment)
                    .then() // insert into Department table
                    .then(console.log(`(new department) has been added to the database`))
                    .then(init());
            }
            else if (questions.choices === 'Add A Role') {
                inquirer.prompt(addRole)
                .then() // insert into Roles table
                .then(console.log(`(new role) has been added to the database`))
                .then(init());
            }
            else if (questions.choices === 'Add An Employee') {
                inquirer.prompt(addEmployee)
                .then() // insert into Employees table
                .then(console.log(`(new employee) has been added to the database`))
                .then(init());
            }
            else {
                inquirer.prompt(updateRole)
                .then() // change role in table
                .then(console.log(`(employee name)'s new role is now (new role)`))
                .then(init());
            }
        })
};

