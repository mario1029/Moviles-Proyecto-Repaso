const queries = {
  GET_USERS: `SELECT * FROM cliente`,
  GET_USER_BY_ID: `SELECT * FROM cliente WHERE cedula = $1`,
  SIGN_UP_USER: `INSERT INTO cliente (cedula, nombre, apellido, direccion, contra) VALUES ($1, $2, $3, $4, $5) RETURNING *`,
  UPDATE_USER: `UPDATE cliente SET cedula = $1, nombre = $2, apellido = $3, direccion = $4 WHERE cedula = $5 RETURNING *`,
  DELETE_USER: `DELETE FROM cliente WHERE cedula = $1`,
  GET_PRODUCTS: `SELECT * FROM producto`,
  GET_PRODUCTS_BY_ID: `SELECT * FROM producto WHERE id_producto = $1`,
  UPDATE_PRODUCT: `UPDATE producto SET id_producto = $1, nombre = $2, precio = $3 WHERE id_producto = $4 RETURNING *`,
  NEW_PRODUCT: `INSERT INTO producto (id_producto, nombre, precio) VALUES ($1,$2,$3) RETURNING *`,
  DELETE_PRODUCT: `DELETE FROM producto WHERE id_producto = $1`,
};

module.exports = queries;