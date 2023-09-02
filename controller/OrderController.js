const Order = require('../models/order');


// GET order routes controller
const order_index = (req,res) => {
    res.render('./customer-side/order', {message:req.flash('message')});
};



const order_create = (req,res) => {
    const order = new Order(req.body);
    

    order.save()
    .then((result) => {
        req.flash('message','Order Receieved');
        res.redirect('./order');
        
    })
    .catch((err) => {
        req.flash('message','Failed to Save due to server error');
        res.redirect('./order');
        console.log(err);
    });
}








module.exports = {
    order_index,
    order_create
}