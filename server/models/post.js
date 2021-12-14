import mongoose from 'mongoose'

const postSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    category:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"category",
        required:true,
    },
    admin:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"admin"
    },
    content:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
});

const Post=mongoose.model("post",postSchema);

export default Post;