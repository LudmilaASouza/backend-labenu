-- Active: 1679955588735@@127.0.0.1@3306
CREATE TABLE books (
    id TEXT NOT NULL UNIQUE PRIMARY KEY,
    name TEXT NOT NULL,
    author TEXT NOT NULL,
    page_count INTEGER,
    price REAL NOT NULL
);

CREATE TABLE tarefas(
    id TEXT NOT NULL UNIQUE PRIMARY KEY,
    number INTEGER NOT NULL,
    status TEXT NOT NULL
);

DROP TABLE books;

DROP TABLE tarefas;

INSERT INTO books (id, name, author, page_count, price)
VALUES
(01, "O quinze", "Rachel de Queiroz", 200, 24.95),
(02, "Dom Casmurro", "Machado de Assis", (NULL), 46.90);

INSERT INTO tarefas (id, number, status)
VALUES
(200, 201, "CREATE"),
(400, 404, "ERROR NOT FOUND"),
(500, 500, "INTERNAL SERVER ERROR");

UPDATE books
SET page_count = 463
WHERE id = 02;

UPDATE tarefas
SET 
number = 202,
status = "ACCEPTED"
WHERE id = 01;

DELETE FROM books 
WHERE id = 01;

DELETE FROM tarefas
WHERE id = 400;

SELECT * FROM books;

SELECT * FROM tarefas;
