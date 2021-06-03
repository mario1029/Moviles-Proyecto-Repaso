const express = require('express');
const router = express.Router();
const auth = require('./auth');
const users = require('./users');
const products = require('./products');
const orders = require('./orders');
const file = require('./file');

router.use('/auth', auth);
router.use('/users', users);
router.use('/products', products);
router.use('/orders', orders);
router.use('/file', file);


module.exports = router;