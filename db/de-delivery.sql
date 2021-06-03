CREATE TABLE cliente
(cedula INTEGER NOT NULL,
 nombre VARCHAR,
 apellido VARCHAR,
 direccion VARCHAR,
 contra VARCHAR,
 PRIMARY KEY(cedula));

CREATE TABLE producto
(id_producto INTEGER NOT NULL,
 nombre VARCHAR,
 precio NUMERIC(15,2),
 PRIMARY KEY(id_producto));

CREATE TABLE factura
(id_factura INTEGER NOT NULL,
 cedula INTEGER NOT NULL,
 PRIMARY KEY(id_factura),
 FOREIGN KEY(cedula) REFERENCES cliente
 ON DELETE CASCADE ON UPDATE CASCADE
 );
 
 CREATE TABLE orden
(id_factura INTEGER NOT NULL,
 id_producto INTEGER NOT NULL,
 PRIMARY KEY(id_factura, id_producto),
 FOREIGN KEY(id_factura) REFERENCES factura
 ON DELETE CASCADE ON UPDATE CASCADE,
 FOREIGN KEY(id_producto) REFERENCES producto
 ON DELETE CASCADE ON UPDATE CASCADE
 );