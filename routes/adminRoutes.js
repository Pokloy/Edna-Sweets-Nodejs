const express = require('express');
const Order = require('../models/order');
const AdminController = require('../controller/AdminController');



const router = express.Router();




//GET order admin routes
router.get('/', AdminController.admin_index);

//DELETE order admin routes
router.delete('/:id',AdminController.admin_delete);


//GET user admin routes
router.get('/users',AdminController.users_admin);


//GET create new user
router.get('/users/create', AdminController.create_user);


module.exports = router;