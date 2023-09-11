const bcrypt = require('bcrypt');
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




//Hash the password and sanswer in create.
UserSchema.pre('save', async function(next) {
    try {
        
        if (this.isModified('password')) {
            const hashedPassword = await bcrypt.hash(this.password, 2);
            this.password = hashedPassword;
        }
        if (this.isModified('sanswer')) {
            const hashedAnswer = await bcrypt.hash(this.sanswer, 2);
            this.sanswer = hashedAnswer;
        }
        return next();
    } catch (error) {
        return next(error);
    }
});



//Hash the password and sanswer in update.
UserSchema.pre('findOneAndUpdate', async function (next) {
    try {
        const update = this._update; 
        if (update.password) {
            const hashedPassword = await bcrypt.hash(update.password, 2);
            update.password = hashedPassword;
        }
        if (update.sanswer) {
            const hashedAnswer = await bcrypt.hash(update.sanswer, 2);
            update.sanswer = hashedAnswer;
        }
        return next();
    } catch (error) {
        return next(error);
    }
});









const User = mongoose.model('User', UserSchema);
module.exports = User;
