const express = require('express');
const router = express.Router();
const auth = require('./auth');
const users = require('./users');
const products = require('./products');

router.use('/auth', auth);
router.use('/users', users);
router.use('/products', products);

module.exports = router;