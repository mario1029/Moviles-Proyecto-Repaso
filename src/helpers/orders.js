const Pool = require('../utils/pool');
const queries = require('../utils/queries')

const pool = Pool.getInstance();

const getOrderByID = async (id)=>{
	const client = await pool.connect();
	try {
	    await client.query('BEGIN');
	    const response = (await client.query(queries.GET_ORDER_BY_ID, [id])).rows[0];
	    const order ={
	        id_factura: response.id_factura,
	        id_producto: response.id_producto,
      	};    
    	await client.query('COMMIT');
    	return order;
  } catch (e) {
      client.query('ROLLBACK');
      console.log(e);
      throw e;
  } finally {
      client.release();
  }
}

const insertOrder = async (body)=>{
	const {cedula, id_factura, id_producto} = body;
	
	const client = await pool.connect();
	try {

	    await client.query('BEGIN');

	    const response1 = (await client.query(queries.NEW_BILL, [id_factura, cedula])).rows[0];
	    
	    const response2 = (await client.query(queries.NEW_ORDER, [id_factura, id_producto])).rows[0];
	    
	    const order ={
	        id_factura: response2.id_factura,
	        id_producto: response2.id_producto,
      	};  
    	await client.query('COMMIT');
	    return order;
  	} catch (e) {
    	client.query('ROLLBACK');
    	console.log(e);
    	throw e;
  } finally {
  	    client.release();
  }
}

const deleteOrder = async (id)=>{
	const client = await pool.connect();
	
	try {
	    await client.query('BEGIN');
	    const response = (await client.query(queries.DELETE_ORDER, [id])).rows[0] > 0;

    	await client.query('COMMIT');
    	return response;
  	} catch (e) {
      	client.query('ROLLBACK');
      	console.log(e);
    	throw e;
  	} finally {
      	client.release();
  }
}

module.exports = {getOrderByID, insertOrder, deleteOrder };