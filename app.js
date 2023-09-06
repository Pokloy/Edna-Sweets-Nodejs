const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Orderroutes = require('./routes/orderRoutes');
const { result } = require('lodash');
const Order = require('./models/order');
const User = require('./models/users');
const session = require('express-session');
const flush = require('connect-flash');
const Adminrouteres = require('./routes/adminRoutes');


//expressjs app
const app = express();



//register view engine
app.set('view engine', 'ejs');

//register session 
app.use(session({
    secret:'secret',
    cookie:{maxAge: 60000},
    resave:false,
    saveUninitialized:false
}));
app.use(flush());


//mongoose and mongodb set-up 
const dbURI = 'mongodb+srv://practice1:Showcase221@practicecluster0.oe9bbzb.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(dbURI)
    .then((result) => console.log('connected to db'))
    .catch((err) => console.log(err));




    
// Testing save data in Database using Http request
// app.get('/add-user',(req, res) => {
//     const user = new User({
//         username:'asdasd',
//         password:'2221',
//         squestion:'asdasd',
//         sanswer:'asdasd',
//         status:'asdasd'
//     });

//     user.save()
//     .then((result) => {
//         res.send(result)
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// });



//localhost:3000
app.listen(3000);

//directing all resources to public folder using morgan app
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(morgan('dev'));



//customer side
app.get('/',(req, res) => {
    res.render('./index');
});


app.get('/about', (req, res) => {
    res.render('./customer-side/about');
});


app.get('/product', (req, res) => {
    res.render('./customer-side/product');
});


app.get('/store', (req, res) => {
    res.render('./customer-side/store');
});

app.get('/', (req, res) => {
    res.redirect('/order');
});


//admin side
app.get('/', (req, res) => {
    res.render('./admin-side/dashboard');
});

app.get('/log-in', (req, res) => {
    res.render('./admin-side/log-in');
});


app.get('/', (req, res) => {
    res.redirect('/admin');
});






app.use('/order', Orderroutes);
app.use('/admin', Adminrouteres);


