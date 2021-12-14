import express from 'express'
import Category from '../../models/category.js';
import Post from '../../models/post.js';
const post_router=express.Router();


// show limited posts
post_router.get("/",async(req,res)=>{
    const posts=await Post.find().limit(4);
    res.send({posts:posts})
})

// random post
post_router.get("/random_post",async(req,res)=>{
    const posts=await Post.find().skip(Math.random()*3).limit(3);
    res.send({posts:posts})
})

post_router.get("/popular_post",async(req,res)=>{
    // this will do later
    const posts=await Post.find().sort('descending').limit(6);
    res.send({posts:posts})
})

// show post by category id
post_router.get("/category/:id",async(req,res)=>{
    const cat_id=req.params.id;
    const posts=await Post.find({category:cat_id})
    res.send({posts:posts})
})

// show all posts for blog page
post_router.get("/allPosts",async(req,res)=>{
    const posts=await Post.find()
    res.send({posts:posts})
})

// add latest posts

post_router.get("/latestPosts",async(req,res)=>{
    const posts=await Post.find().sort('_id').limit(6);
    res.send({posts:posts})
})

// show Categorys
post_router.get("/category",async(req,res)=>{
    const categorys=await Category.find()
    res.send({categorys:categorys})
})


// show post by id
post_router.get("/:id",async(req,res)=>{
    const id=req.params.id;
    const posts=await Post.find({_id:id})
    res.send({posts:posts})
})





export default post_router;