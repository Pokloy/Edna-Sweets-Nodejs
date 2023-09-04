const Order = require('../models/order');



// GET order routes controller
const admin_index = (req,res) => {
    Order.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('./admin-side/dashboard', {
            orders:result
        })
    })
    .catch((err) => {
        console.log(err);
    });
    
};









module.exports = {
    admin_index
}