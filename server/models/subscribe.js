import mongoose from 'mongoose'

const subscribeSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
    }
})

const SubScribe=mongoose.model('subscibe',subscribeSchema);
export default SubScribe;
