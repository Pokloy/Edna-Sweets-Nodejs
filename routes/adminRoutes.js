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


//DELETE user admin routes
router.delete('/:id',AdminController.user_delete);


//GET create new user
router.get('/users/create', AdminController.create_user_get);

//POST create new user
router.post('/users/create', AdminController.create_user_post);

module.exports = router;