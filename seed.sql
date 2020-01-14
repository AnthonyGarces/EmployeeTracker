INSERT INTO employee_trackerdb.department (ID, Name) VALUES (1, Accounting);
INSERT INTO employee_trackerdb.department (ID, Name) VALUES (2, 'Human Resources');
INSERT INTO employee_trackerdb.department (ID, Name) VALUES (3, Sales);
INSERT INTO employee_trackerdb.department (ID, Name) VALUES (4, Management);

INSERT INTO `employee_trackerdb`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('1', 'Sales Rep', '60000', '3');
INSERT INTO `employee_trackerdb`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('2', 'Accountant', '75000', '1');
INSERT INTO `employee_trackerdb`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('3', 'CEO', '250000', '4');
INSERT INTO `employee_trackerdb`.`role` (`ID`, `title`, `salary`, `department_ID`) VALUES ('4', 'HR Rep', '65000', '2');

INSERT INTO `employee_trackerdb`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('1', 'Anthony', 'Garces', '3', '1');
INSERT INTO `employee_trackerdb`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('2', 'Hermione', 'Granger', '4', '1');
INSERT INTO `employee_trackerdb`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('3', 'Ron', 'Weasley', '1', '1');
INSERT INTO `employee_trackerdb`.`employee` (`ID`, `first_name`, `last_name`, `role_id`, `manager_id`) VALUES ('4', 'Harry', 'Potter', '2', '1');



