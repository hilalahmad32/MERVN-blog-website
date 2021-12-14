import express from 'express';
import Contact from '../../models/contact.js'
const contact_route=express.Router();


contact_route.post("/",async (req,res)=>{
    const {name,email,website,message}=req.body;

    const contact=new Contact({
        name:name,
        email:email,
        website:website,
        message:message
    })
    const result=await contact.save();

    if(result){
        res.send({success:true});
    }else{
        res.send({success:false});
    }
})

contact_route.get("/",async(req,res)=>{
    const contacts=await Contact.find();
    res.send({contacts:contacts});
})
export default contact_route;