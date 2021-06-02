const express = require('express');
const router = express.Router();
const {signUpUser} = require('../helpers/auth');

router.get('/',(req,res)=>{
	res.send('Aqui estan las cosas de login')
})

router.post('/signup', async (req, res)=>{
	//res.send('vista de registro');
	
	try {
    	const data = await signUpUser(req.body);
    	res.status(200).json({ status: 200, usuario: data, message: 'Usuario registrado satisfactoriamente' });
  	} catch (e) {
    	res.status(500).json({ status: 500, error: e, message: 'Error al registrar un usuario' });
  	}
});

module.exports = router;