const Pool = require('../utils/pool');
const queries = require('../utils/queries')
const { compare, genSaltSync, hashSync } = require('bcryptjs');


const pool = Pool.getInstance();

const signUpUser = async function(body){
	const client = await pool.connect();
	const {cedula, nombre, apellido, direccion, contra} = body;
	try {
	    await client.query('BEGIN');
	    const salt = genSaltSync(10);
	    const hashedPassword = hashSync(contra, salt);
	    const response = (await client.query(queries.SIGN_UP_USER, [cedula, nombre.toLowerCase(), apellido.toLowerCase(), direccion, hashedPassword])).rows[0];
	    const user = {
			      cedula: response.cedula,
			      nombre: response.nombre,
			      apellido: response.apellido,
			      direccion: response.direccion,
			      contra: response.contra,
			    };
	    await client.query('COMMIT');
    	return user;
  } catch (e) {
    	await client.query('ROLLBACK');
    	throw e;
  } finally {
    	client.release();
  }

/*	
	try{
		const response = await client.query(
			  "insert into cliente values (1,'Mario','G','por ahi','123')",
			  (err, result) => {}
			)
		console.log('exito')
	}catch(e){
		console.log(e);
	}
*/
}

module.exports = {signUpUser};