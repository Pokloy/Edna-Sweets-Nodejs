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


// DELETE (SINGLE ORDER) controller
const admin_delete = (req,res) => {
    const id = req.params.id;

    Order.findByIdAndDelete(id)
    .then(result => {
        res.json({redirect:'/admin'})
    })
    .catch(err => {
        console.log(err);
    })
}



//GET admin users side
const users_admin = (req,res) => {
    res.render('./admin-side/users');
}


//GET create new users side
const create_user = (req,res) => {
    res.render('./admin-side/create-user');
}







module.exports = {
    admin_index,
    admin_delete,
    users_admin,
    create_user
}