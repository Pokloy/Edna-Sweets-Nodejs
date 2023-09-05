const mongoose = require('mongoose');
const Schema = mongoose.Schema;




const UserSchema = new Schema({
    username:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    squestion:{
        type:String,
        require:true
    },
    sanswer:{
        type:String,
        require:true
    },
    status:{
        type:String,
        require:true
    }
}, {timestamps:true});



const Order = mongoose.model('User', UserSchema);
module.exports = Order;