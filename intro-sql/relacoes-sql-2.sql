-- Active: 1680817562453@@127.0.0.1@3306
-- Prática 1
CREATE TABLE users(
    id TEXT NOT NULL PRIMARY KEY UNIQUE,
    name TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    created_at TEXT NOT NULL DEFAULT(DATETIME())
);

INSERT INTO users (id, name, email, password)
VALUES
("U001", "Ludmila Souza", "ludmilasouz31@gmail.com", "741852"), -- A
("U002", "Thaís Souza", "thais.y@hotmail.com", "989456"), --B
("U003", "Thainá Aguiar", "thaina.aguair@hotmail.com", "963852"); --C

-- Prática 2

CREATE TABLE follows(
    follower_id TEXT NOT NULL,
    followed_id TEXT NOT NULL,
    FOREIGN KEY (follower_id) REFERENCES users(id),
    FOREIGN KEY (followed_id) REFERENCES users(id)
);

INSERT INTO follows
VALUES
("U001", "U002"), -- Pessoa A segue B
("U001", "U003"), -- Pessoa A segue C
("U002", "U001"); -- Pessoa B segue A

SELECT * FROM follows
INNER JOIN users --Intercessão 
ON follows.follower_id = users.id;

-- Prática 3
SELECT * FROM users
LEFT JOIN follows
ON follows.follower_id = users.id;

SELECT 
users.id AS userID, users.name AS userName, 
follows.followed_id AS seguidoID, user2.name AS seguidoName
FROM users
LEFT JOIN follows ON follows.follower_id = users.id
LEFT JOIN users AS user2 ON follows.followed_id = user2.id;
