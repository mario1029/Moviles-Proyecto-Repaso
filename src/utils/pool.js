const { Pool } = require('pg')
require('dotenv').config();

function pool() {
  	if (!pool._instance) {
	    pool._instance = new Pool({
		connectionString: process.env.DATABASE_URL,
		max: 500,
		min: 100,
  		});
	}
  
	pool.getInstance = function () { 
	  	return this._instance; }; 

	return pool._instance; 
}

/*
const pool = new Pool({
	connectionString: process.env.DATABASE_URL,
	max: 500,
	min: 100,
})
*/
module.exports = pool;
