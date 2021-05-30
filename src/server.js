const app = require('./index'); 

console.log("jelo2")


const port = process.env.PORT || 3000;
const server = app.listen(port, () =>{
	 console.log('Listening on port',port);
	});
