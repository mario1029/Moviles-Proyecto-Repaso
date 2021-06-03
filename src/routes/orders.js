const express = require('express');
const router = express.Router();
const {getOrderByID, insertOrder, deleteOrder } = require('../helpers/orders');

router.get('/:id', async (req, res)=>{
	const id = req.params.id;
	try {
    	const data = await getOrderByID(id);
    	res.status(200).json({ status: 200, data: data, message: 'Orden encontrada' });
  	} catch (e) {
   		res.status(500).json({ status: 500, error: e, message: 'Error al buscar la orden' });
  	}
})

router.post('/', async (req, res)=>{
	try {
    	const data = await insertOrder(req.body);
    	res.status(200).json({ status: 200, data: data, message: 'Orden creada' });
  	} catch (e) {
   		res.status(500).json({ status: 500, error: e, message: 'Error al crear la orden' });
  	}
})

router.delete('/:id', async (req, res)=>{
	const id = req.params.id;
	try {
    	const data = await deleteOrder(id);
    	res.status(200).json({ status: 200, data: data, message: 'Orden eliminada' });
  } catch (e) {
   		res.status(500).json({ status: 500, error: e, message: 'Error al eliminar la orden' });
  }
})

module.exports = router;