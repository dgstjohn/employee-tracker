INSERT INTO department (department_name)
VALUES
('Engineering'),
('Finance'),
('Legal'),
('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
('Sales Lead', 100000, 4),
('Salesperson', 80000, 4),
('Lead Engineer', 150000, 1),
('Software Engineer', 120000, 1),
('Account Manager', 150000, 2),
('Accountant', 125000, 2),
('Legal Team Lead', 250000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('John', 'Doe', 1, null),
('Mike', 'Chan', 2, 1),
('Ashley', 'Rodriguez', 3, null),
('Kevin', 'Tupik', 4, 3),
('Malia', 'Brown', 5, null),
('Sarah', 'Lourd', 6, 5),
('Tom', 'Allen', 7, null),
('Christian', 'Eckenrode', 4, 3);