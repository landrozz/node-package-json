-- Active: 1674852904877@@127.0.0.1@3306
CREATE TABLE users(
id TEXT PRIMARY KEY UNIQUE NOT NULL,
email TEXT UNIQUE NOT NULL,
password TEXT UNIQUE NOT NULL
);

SELECT * FROM users;

INSERT INTO users (id, email, password)
VALUES (4, "tonho@gmail.com", "senha");

CREATE TABLE products(
id TEXT PRIMARY KEY UNIQUE NOT NULL,
name TEXT NOT NULL,
price REAL NOT NULL,
category TEXT NOT NULL
);

SELECT * FROM products;

INSERT INTO products (id, name, price, category)
VALUES (6, "Fone de ouvido sem fio Pulse PS5", 600, "Periferico");

SELECT * FROM products
WHERE name LIKE "%tendo%";

SELECT * FROM products
WHERE id = 6;

DELETE FROM users
WHERE id = 4;

DELETE FROM products
WHERE id = 6;

UPDATE users
SET password = "SENHAMELHOR"
WHERE id = 1;

UPDATE products
SET price = 150
WHERE id = 1;

SELECT * FROM users
ORDER BY email ASC;

SELECT * FROM products
ORDER BY price ASC
LIMIT 20;

SELECT * FROM products
WHERE price >= 100
  AND price <= 300
ORDER BY price ASC;