import express from 'express'
import auth from '../../middleware/admin/auth.js';
import Category from '../../models/category.js';
const cat_router=express.Router();


// get all categorys
cat_router.get("/",auth,async(req,res)=>{
    const categorys=await Category.find();
    res.send({categorys:categorys})
})
// get total category
cat_router.get("/total",auth,async(req,res)=>{
    const categorys=await Category.find();
    const total=categorys.length;
    res.send({total:total})
})
// post category
cat_router.post("/",auth,async(req,res)=>{
    // destructuring the variable
    const {cat_name}=req.body;
    const category=new Category({
        cat_name:cat_name,
    });
    const result=await category.save();
    if(result){
        res.send({success:true});
    }else{
        res.send({success:false});
    }
})

// get category by id

cat_router.patch("/:id",auth,async(req,res)=>{
    const id=req.params.id;
    const categorys=await Category.findById({_id:id})
    res.send({categorys:categorys});
})

// update category
cat_router.put("/:id",auth,async (req,res)=>{
    const id=req.params.id;
    const {cat_name}=req.body;
    const categorys=await Category.findByIdAndUpdate({_id:id},{
        cat_name:cat_name,
    });
    if(categorys){
        res.send({success:true});
    }else{
        res.send({success:false});
    }
});


// delete category i forget in video first 1
cat_router.delete("/:id",auth,async(req,res)=>{
    const id=req.params.id;
    const categorys=await Category.findByIdAndDelete({_id:id})
    if(categorys){
        res.send({success:true});
    }else{
        res.send({success:false});
    }
})

export default cat_router;