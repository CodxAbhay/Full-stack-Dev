CREATE TABLE IF NOT EXISTS user(
    id INT PRIMARY KEY ,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

-- i have mistaken in id i used int but the faker library genrate string 
-- based uuid aso i have to update the data type using alter commond 

ALTER TABLE user 
MODIFY COLUMN id VARCHAR(36) ;

