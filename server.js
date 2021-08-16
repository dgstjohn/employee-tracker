const inquirer = require('inquirer');
const express = require('express');
const cTable = require('console.table');
const connection = require('./db/connection.js');
const routes = require('./routes/apiRoutes.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Use apiRoutes
app.use('/api', routes);

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

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
        name: 'department',
        message: 'Which department is the new role assigned to?',
    }
]

const addEmployee = [
    {
        type: 'input',
        name: 'firstName',
        message: "What is the employee's first name?"
    },
    {
        type: 'input',
        name: 'lastName',
        message: "What is the employee's last name?"
    },
    {
        type: 'list',
        name: 'employeeRole',
        message: "What is the employee's role?",
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead']
    },
    {
        type: 'list',
        name: 'manager',
        message: "Who is the new employee's manager?",
        choices: [] // pull choices from employee table with manager_id
    }
]

const updateRole = [
    {
        type: 'list',
        name: 'changeEmployee',
        message: "Which employee's role would you like to change?",
        choices: [] // pull choices from most current employee table update
    },
    {
        type: 'list',
        name: 'changedRole',
        message: 'What will their new role be?',
        choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead']
    }
]

init = () => {
    inquirer.prompt(questions)
        .then(answers => {
            if (questions.choices === 'View All Departments') {
                let sql = `SELECT * FROM department;`;
                console.table(sql);
                init();
            }
            else if (questions.choices === 'View All Roles') {
                let sql = `SELECT * FROM roles;`;
                console.table(sql);
                init();
            }
            else if (questions.choices === 'View All Employees') {
                let sql = `SELECT * FROM employee;`;
                console.table(sql);
                init();
            }
            else if (questions.choices === 'Add A Department') {
                inquirer.prompt(addDepartment)
                    .then(answers) // insert into Department table
                    .then(console.log(`(new department) has been added to the database`))
                    .then(init());
            }
            else if (questions.choices === 'Add A Role') {
                inquirer.prompt(addRole)
                    .then(answers) // insert into Roles table
                    .then(console.log(`(new role) has been added to the database`))
                    .then(init());
            }
            else if (questions.choices === 'Add An Employee') {
                inquirer.prompt(addEmployee)
                    .then(answers) // insert into Employees table
                    .then(console.log(`(new employee) has been added to the database`))
                    .then(init());
            }
            else {
                inquirer.prompt(updateRole)
                    .then(answers) // change role in table
                    .then(console.log(`(employee name)'s new role is now (new role)`))
                    .then(init());
            }
        })
};

// Start server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  });
  


init();