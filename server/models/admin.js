import mongoose from 'mongoose'

const adminSchema=new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    roll:{
        type:Number,
        required:true,
    },
    password:{
        type:String,
        required:true,
    }

});

const Admin=mongoose.model('admin',adminSchema);
export default Admin;