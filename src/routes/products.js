const express = require('express');
const router = express.Router();
const {getProducts, getProductByID, updateProduct, insertProduct, deleteProduct} = require('../helpers/products');

router.get('/', async (req, res)=>{
  try {
    const data = await getProducts();
    res.status(200).json({ status: 200, data: data, message: 'Productos en la BDD' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al buscar Productos' });
  }
})

router.get('/:id', async (req, res)=>{
  const id = req.params.id;
  try {
    const data = await getProductByID(id);
    res.status(200).json({ status: 200, data: data, message: 'Producto encontrado' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al buscar el Producto' });
  }
})

router.post('/', async (req, res)=>{
  try {
    const data = await insertProduct(req.body);
    res.status(200).json({ status: 200, data: data, message: 'Producto insertado' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al insertar el Producto' });
  }
})

router.put('/:id', async (req, res)=>{
  const id = req.params.id;
  try {
    const data = await updateProduct(req.body, id);
    res.status(200).json({ status: 200, data: data, message: 'Producto actualizado' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al actualizar el Producto' });
  }
})

router.delete('/:id', async (req, res)=>{
  const id = req.params.id;
  try {
    const data = await deleteProduct(id);
    res.status(200).json({ status: 200, data: data, message: 'Producto eliminado' });
  } catch (e) {
    res.status(500).json({ status: 500, error: e, message: 'Error al eliminar el Producto' });
  }
})

module.exports = router;