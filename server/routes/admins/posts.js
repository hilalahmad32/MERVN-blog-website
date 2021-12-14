import express from 'express'
const post_route = express.Router();
import multer from 'multer'
import auth from '../../middleware/admin/auth.js';
import Post from '../../models/post.js';
import jwt from 'jsonwebtoken'
import fs, { truncate } from 'fs'

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Math.random() + "-" + file.originalname);
    }
});

const upload = multer({
    storage: storage,
})

// get all post 
post_route.get("/", auth, async (req, res) => {
    const token = req.headers.authorization.split(" ")[1];
    const authAdmin = jwt.verify(token, "thisiscompletemultiuserblogwebsiteinnodeandvueandalsoreact")
    if (authAdmin.roll == 1) {
        const posts = await Post.find().populate(['admin', 'category'])
        res.json({ posts: posts });
    }else{
        const posts = await Post.find({admin:authAdmin.user_id}).populate(['admin', 'category'])
        res.send({ posts: posts });
    }

});

post_route.get("/total",auth,async(req,res)=>{
    const posts=await Post.find();
    const total=posts.length;
    res.send({total:total})
})

post_route.post("/", auth, upload.single("image"), async (req, res) => {
    const { title, category, admin, content } = req.body;
    const posts = new Post({
        title: title,
        category: category,
        admin: admin,
        content: content,
        image: req.file.filename,
    });

    const result = await posts.save();
    if (result) {
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
})

// show post by id
post_route.patch("/:id",auth,async(req,res)=>{
    const id =req.params.id;
    const posts=await Post.findById({_id:id}).populate(['admin','category']);
    res.send({posts:posts});
})

post_route.put("/",auth,upload.single("image"),async(req,res)=>{
    const id =req.body.id;
    const{title,category,content,old_image}=req.body;
    let new_image="";
    if(req.file){
        new_image=req.file.filename;
        try {
            fs.unlinkSync('./uploads/'+old_image);
        } catch (error) {
            res.send(error)
        }
    }else{
        new_image=old_image;
    }
    const posts=await Post.findByIdAndUpdate({_id:id},{
        title: title,
        category: category,
        content: content,
        image: new_image,
    });
    if (posts) {
        res.send({ success: true });
    } else {
        res.send({ success: false });
    }
})

post_route.delete("/:id",auth,async(req,res)=>{
    const id =req.params.id;
    Post.findByIdAndDelete({_id:id},(error,result)=>{
        if(result.image != ""){
            try {
                fs.unlinkSync("./uploads/"+result.image);
            } catch (error) {
                res.send(error)
            }
        }
        if(result){
            res.send({success:true})
        }else{
            res.send({success:false})
        }
    })
})
export default post_route;