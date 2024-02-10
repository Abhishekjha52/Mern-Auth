import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required: true,
        unique: true, //every user must have unique name
    },

    email: {
        type : String,
        required: true,
        unique: true, //every user must have unique name
    },

    password: {
        type : String,
        required: true,
    }
    
}, {timestamps:true});

const User = mongoose.model('User', userSchema);

export default User;