import express from 'express';
import SubScribe from '../../models/subscribe.js';
const sub_route=express.Router();

sub_route.post("/",async(req,res)=>{
    const {email}=req.body;
    const is_email=await SubScribe.findOne({email:email});
    if(is_email){
        res.send({exist:true});
    }else{
        const sub=new SubScribe({
            email:email,
        });
        const result=await sub.save();
        if(result){
            res.send({success:true});
        }else{
            res.send({success:false});
        }
    }
})


export default sub_route;