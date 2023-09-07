const Order = require('../models/order');
const User = require('../models/users');



// GET order routes controller
const admin_index = (req, res) => {
    Order.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('./admin-side/dashboard', {
                orders: result
            })
        })
        .catch((err) => {
            console.log(err);
        });

};


// DELETE (SINGLE ORDER) controller
const admin_delete = (req, res) => {
    const id = req.params.id;

    Order.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/admin' })
        })
        .catch(err => {
            console.log(err);
        })
}


//users controllers
//GET admin users side
const users_admin = (req, res) => {
    User.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('./admin-side/users',  {
                users: result
                
            })
        })
        .catch((err) => {
            console.log(err);
        });
}




//GET create new users side
const create_user_get = (req, res) => {
    res.render('./admin-side/create-user', {message:req.flash('message')});
}

//POST create new users side
const create_user_post = (req, res) => {
    const user = new User(req.body);

    user.save()
        .then((result) => {
            req.flash('message','User Created');
            res.redirect('/admin/users/create');
        })
        .catch((err) => {
            req.flash('message','Failed to Save due to server error');
            console.log(err);
        });
}


// //GET single view users
// const singleview_user = (req,res) => {
//     const id = req.params.id;

//     User.findById(id)
//     .then(result => {
//         res.render('admin/users');
//     })
//     .catch(err => {
//         console.log(err);
//     })
// }




// DELETE (SINGLE USER) controller
const user_delete = (req, res) => {
    const id = req.params.id;

    User.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/admin/users/' })
        })
        .catch(err => {
            console.log(err);
        })
}





module.exports = {
    admin_index,
    admin_delete,
    users_admin,
    user_delete,
    create_user_get,
    create_user_post
}