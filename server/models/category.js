import mongoose from 'mongoose'

const categorySchema=new mongoose.Schema({
    cat_name:{
        type:String,
        required:true,
    }
});


const Category=mongoose.model("category",categorySchema);
export default Category;