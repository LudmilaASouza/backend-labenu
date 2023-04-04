-- Active: 1680560084620@@127.0.0.1@3306

-- Prática 2
CREATE TABLE users(
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
);

INSERT INTO users 
VALUES 
("001", "Ludmila Souza", "ludmilasouz.a@hotmail.com", "741852"),
("002", "Thaila Marani", "thaila.marani@gmail.com", "321654");

CREATE TABLE phones(
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    phone_number TEXT NOT NULL UNIQUE,
    user_id TEXT NOT NULL,
    FOREIGN KEY(user_id) REFERENCES users(id)
);

INSERT INTO phones --(id, phone_number)
VALUES
("P001", "31-985296650", "001" ),
("P002", "24-963528741", "002"),
("P003", "11-852963741", "001");

SELECT * FROM users 
INNER JOIN phones 
ON phones.user_id = users.id ; 

SELECT users.name, phones.phone_number FROM users 
INNER JOIN phones 
ON phones.user_id = users.id ;

-- PRÁTICA 3

CREATE TABLE licenses (
    id TEXT NOT NULL UNIQUE PRIMARY KEY,
    register_number TEXT NOT NULL UNIQUE,
    category TEXT NOT NULL
);

INSERT INTO licenses 
VALUES 
("L001", "741852", "B"),
("L002", "789456", "D");

CREATE TABLE drivers (
    id TEXT NOT NULL UNIQUE PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    license_id TEXT NOT NULL UNIQUE,
    FOREIGN KEY(license_id) REFERENCES licenses(id)
);

INSERT INTO drivers
VALUES
("U001", "Ludmila Souza", "ludmilasouz.a@hotmail.com", "741852", "L001"),
("U002", "Thaila Marani", "thaila.marani@gmail.com", "321654", "L002");

SELECT * FROM drivers
INNER JOIN licenses
ON licenses.id = license_id ; 

SELECT * FROM licenses
INNER JOIN drivers
ON license_id = licenses.id ; 

SELECT drivers.name, licenses.register_number, licenses.category FROM drivers
INNER JOIN licenses
ON license_id = licenses.id;