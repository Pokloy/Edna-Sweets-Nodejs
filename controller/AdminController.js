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
    User.find()
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


//GET single view users
const singleview_user = (req,res) => {
    const id = req.params.id;

    User.findById(id)
    .then(result => {
        res.render('./admin-side/users_single', {
            users:result,
            message:req.flash('message')
        })
    })
    .catch(err => {
        console.log(err);
    });
}


//POST update user
const user_update = (req, res) => {
    const id = req.params.id;
    const updatedUserData = {
        username: req.body.username,
        password: req.body.password,
        squestion: req.body.squestion,
        sanswer: req.body.sanswer,
        status: req.body.status,
    };

    User.findByIdAndUpdate(id, updatedUserData, { new: true })
        .then(updatedUser => {
            if (!updatedUser) {
                console.log('No user found');
                req.flash('message','Failed to Update due to server error');
            } else {
                req.flash('message','User Updated');
                res.render('./admin-side/users_single', { 
                    users: updatedUser,
                    message:req.flash('message')
                 });
            }
        })
        .catch(err => {
            console.log('Error updating user:', err);
            res.status(500).send('Internal Server Error');
        });
};




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
    create_user_get,
    create_user_post,
    singleview_user,
    user_update,
    user_delete
}