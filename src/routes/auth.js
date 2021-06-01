const express = require('express');
const router = express.Router();
const pool = require('../utils/pool')


const Npool = pool();
console.log(Npool);

router.get('/',(req,res)=>{
	res.send('Aqui estan las cosas de login')
})

router.get('/signin', async (req, res)=>{
	res.send('vista de registro');
});

module.exports = router;