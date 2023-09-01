const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const orderSchema = new Schema({
    name:{
        type:String,
        require:true
    },
    address:{
        type:String,
        require:true
    },
    pnumber:{
        type:String,
        require:true
    },
    product:{
        type:String,
        require:true
    },
    quantity:{
        type:String,
        require:true
    },
    price:{
        type:String,
        require:true
    }
}, {timestamps:true});



const Order = mongoose.model('Order', orderSchema);
module.exports = Order;