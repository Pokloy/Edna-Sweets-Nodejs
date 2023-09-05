const express = require('express');
const Order = require('../models/order');
const OrderController = require('../controller/OrderController');



const router = express.Router();




//GET order routes
router.get('/', OrderController.order_index);


// Post add order
router.post('/', OrderController.order_create);




module.exports = router;