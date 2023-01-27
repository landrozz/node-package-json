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
