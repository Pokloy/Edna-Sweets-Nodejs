const express = require('express');
const Order = require('../models/order');
const AdminController = require('../controller/AdminController');



const router = express.Router();



//GET coffee routes
router.get('/', AdminController.admin_index);




module.exports = router;