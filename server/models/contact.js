import mongoose from 'mongoose';


const contactSchema=new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
    },
    website:{
        type:String,
    },
    message:{
        type:String
    }
})

const Contact=mongoose.model('contact',contactSchema)

export default Contact;