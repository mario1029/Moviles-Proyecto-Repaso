const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
	res.send('Aqui estan las cosas de login')
})

module.exports = router;