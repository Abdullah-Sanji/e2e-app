use employees;
DROP TABLE IF EXISTS employees;
CREATE TABLE employees (id INT NOT NULL AUTO_INCREMENT, first_name VARCHAR(40) NOT NULL, last_name VARCHAR(40) NOT NULL, age INT, PRIMARY KEY ( id ));
