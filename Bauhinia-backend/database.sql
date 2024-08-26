CREATE DATABASE BAUHINIA;
USE BAUHINIA;

CREATE TABLE staff(
    s_id INT PRIMARY KEY AUTO_INCREMENT,
    sf_name VARCHAR(100),
    sl_name VARCHAR(100),
    s_age INT,
    s_contact VARCHAR(10),
    s_email VARCHAR(100),
    s_username VARCHAR(50),
    s_password VARCHAR(100),
    s_role VARCHAR(20)
);

CREATE TABLE product(
    p_id INT PRIMARY KEY AUTO_INCREMENT,
    p_name VARCHAR(100),
    p_batch VARCHAR(100),
    p_banner INT,
    p_price DECIMAL(18,2),
    p_stock INT
);

CREATE TABLE order_table(
    o_id INT PRIMARY KEY AUTO_INCREMENT,
    c_id INT,
    o_date DATE,
    total_amount DECIMAL(18,2),
    o_status ENUM('Pending','Completed','Canceled'),
    FOREIGN KEY (c_id) REFERENCES customer (c_id) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE order_product(
    op_id INT PRIMARY KEY AUTO_INCREMENT,
    o_id INT,
    p_id INT,
    qty INT,
    FOREIGN KEY (o_id) REFERENCES order_table (o_id) ON UPDATE CASCADE ON DELETE SET NULL,
    FOREIGN KEY (p_id) REFERENCES product (p_id) ON UPDATE CASCADE ON DELETE SET NULL
);

CREATE TABLE product_image(
    p_id INT PRIMARY KEY AUTO_INCREMENT,
    p_image1 TEXT,
    p_image2 TEXT,
    p_image3 TEXT,
    p_image4 TEXT
);

CREATE TABLE users(
    username VARCHAR(100) PRIMARY KEY,
    password VARCHAR(16),
    userRole VARCHAR(20)
);
SELECT CURDATE();

SELECT COUNT(*) FROM users;

SELECT * FROM product;

SELECT * FROM staff;

DELETE FROM customer;

INSERT INTO staff(sf_name,sl_name,s_age,s_contact,s_email,s_username,s_password,s_role)
VALUES ('Shehara','Fernando',22,'0771172096','Shehara1010@gmail.com','FernandoS','Shehara2002@#','Admin'),
('Pasindu','Perera',22,'0771172096','pasinduP@bch.com','PasinduP','Admin@1234','Admin');

INSERT INTO customer(cf_name,cl_name,c_age,c_contact,c_email,c_username,c_password)
VALUES
('Thanuka','Perera',22,'0745869831','ThanukaP@bch.com','PereraThanuka','1234'),
('Shihara','Fernando',22,'0714215689','ShiharaF@bch.com','Flaviya26','1234');

INSERT INTO product(p_name,p_batch,p_banner,p_price,p_stock)VALUE('Mens TShirt','B0001','Img1',2100.00,100);

INSERT INTO order_table(c_id,o_date,total_amount,o_status)VALUES(13,CURDATE(),6300.00,'Pending');
INSERT INTO order_product(o_id,p_id,qty)VALUES(3,1,3);


ALTER TABLE product MODIFY p_banner LONGBLOB; 


SELECT * FROM order_table;

DELETE FROM order_table WHERE o_id = 2;
DELETE FROM product WHERE p_id = 4;

ALTER TABLE product AUTO_INCREMENT=2;

SELECT * FROM product;



