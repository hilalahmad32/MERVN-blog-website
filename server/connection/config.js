import mongoose from 'mongoose'

// make a connection
const db="mongodb://localhost:27017/blog_web";
mongoose.connect(db).then(()=>{
    console.log("connection is successfully");
}).catch((e)=>{
    console.log(e);
})