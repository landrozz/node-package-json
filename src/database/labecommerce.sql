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

CREATE TABLE purchases(
id TEXT PRIMARY KEY UNIQUE NOT NULL,
total_price REAL NOT NULL,
paid INTEGER NOT NULL,
delivered_at TEXT,
buyer_id TEXT NOT NULL,
FOREIGN KEY (buyer_id) REFERENCES users(id)
);

SELECT * FROM purchases;

INSERT INTO purchases (id, total_price, paid, buyer_id)
VALUES
  (1, 1200, 0, 1),
  (2, 100, 0, 1),
  (3, 350, 0, 2),
  (4, 150, 0, 2),
  (5, 200, 0, 3),
  (6, 3000, 0, 3),
  (7, 500, 0, 4),
  (8, 1200, 0, 4);

UPDATE purchases
SET delivered_at = DATETIME("now", "localtime")
WHERE id = 1;

SELECT * FROM users
INNER JOIN purchases
ON users.id = purchases.buyer_id
WHERE users.id = 1;

-- A coluna paid será utilizada para guardar uma lógica booleana. O SQLite recomenda o uso do número 0 para false e 1 para true.
-- Os pedidos começam com paid valendo 0 (você irá definir isso quando for popular a tabela com o INSERT)
-- A coluna delivered_at será utilizada para gerenciar a data de entrega do pedido. Ela é opcional, porque sempre começará sem valor ao criar um pedido, ou seja, null.
-- O SQLite recomenda utilizar TEXT para lidar com strings no formato ISO8601 "aaaa-mm-dd hh:mm:sss". Lembre-se da existência da função nativa DATETIME para gerar datas nesse formato.