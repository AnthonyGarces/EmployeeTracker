DROP DATABASE IF EXISTS employee_trackerdb ; 
CREATE database employee_trackerdb ;

CREATE TABLE department (
  ID int(11) NOT NULL AUTO_INCREMENT,
  Name varchar(40) DEFAULT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE role (
  ID INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(45) NULL,
  salary DECIMAL(10,4) NULL,
  department_ID INT NULL,
  PRIMARY KEY (ID)
  );

CREATE TABLE employee (
  ID int(11) NOT NULL AUTO_INCREMENT,
  first_name varchar(45) DEFAULT NULL,
  last_name varchar(45) DEFAULT NULL,
  role_id int(11) DEFAULT NULL,
  manager_id int(11) DEFAULT NULL,
  PRIMARY KEY (ID)
);






