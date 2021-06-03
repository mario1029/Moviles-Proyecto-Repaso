const Pool = require('../utils/pool');
const queries = require('../utils/queries')

const pool = Pool.getInstance();

const getProducts = async ()=>{
	const client = await pool.connect();
	try {
	    await client.query('BEGIN');
	    const response = (await client.query(queries.GET_PRODUCTS)).rows;
	    const products = response.map((row) => {
	      return {
	        id_producto: row.id_producto,
	        nombre: row.nombre,
	        precio: row.precio,
      };
    });
    	await client.query('COMMIT');
    	return products;
  } catch (e) {
      client.query('ROLLBACK');
      console.log(e);
      throw e;
  } finally {
      client.release();
  }
};

const getProductByID = async (id)=>{
	const client = await pool.connect();
	try {
	    await client.query('BEGIN');
	    const response = (await client.query(queries.GET_PRODUCTS_BY_ID, [id])).rows[0];
	    const product = {
	            id_producto: response.id_producto,
	            nombre: response.nombre,
	            precio: response.precio,
	    };
    await client.query('COMMIT');
    return product;
  } catch (e) {
      client.query('ROLLBACK');
      console.log(e);
      throw e;
  } finally {
      client.release();
  }
};

const updateProduct = async(body, id)=>{
	const client = await pool.connect();
	const {id_producto, nombre, precio} = body;
	try {
	    await client.query('BEGIN');
	    const response = (await client.query(queries.UPDATE_PRODUCT, [id_producto, nombre, precio, id])).rows[0];
	    const product = {
	            id_producto: response.id_producto,
	            nombre: response.nombre,
	            precio: response.precio,
	    };
    	await client.query('COMMIT');
	    return product;
  	} catch (e) {
    	client.query('ROLLBACK');
    	console.log(e);
    	throw e;
  } finally {
  	    client.release();
  }
}

const insertProduct = async (body)=>{
	const client = await pool.connect();
	const {id_producto, nombre, precio} = body;
	try {
	    await client.query('BEGIN');
	    const response = (await client.query(queries.NEW_PRODUCT, [id_producto, nombre.toLowerCase(), precio])).rows[0];
	    const product = {
	            id_producto: response.id_producto,
	            nombre: response.nombre,
	            precio: response.precio,
	    };
    	await client.query('COMMIT');
	    return product;
  	} catch (e) {
    	client.query('ROLLBACK');
    	console.log(e);
    	throw e;
  } finally {
  	    client.release();
  }
}

const deleteProduct = async (id)=>{
	const client = await pool.connect();
	try {
	    await client.query('BEGIN');
	    const response = (await client.query(queries.DELETE_PRODUCT, [id])).rows[0] > 0;
	    const product = {
	            id_producto: response.id_producto,
	            nombre: response.nombre,
	            precio: response.precio,
	    };
    await client.query('COMMIT');
    return product;
  } catch (e) {
      client.query('ROLLBACK');
      console.log(e);
      throw e;
  } finally {
      client.release();
  }
}

module.exports = {getProducts, getProductByID, updateProduct, insertProduct, deleteProduct};