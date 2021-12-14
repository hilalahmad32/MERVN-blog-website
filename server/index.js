import express from 'express'
const app = express()
// port number
const PORT = process.env.PORT || 8000;
import './connection/config.js'
import cors from 'cors'
import admin_route from './routes/admins/admin.js';
import cat_router from './routes/admins/category.js';
import post_route from './routes/admins/posts.js';
import post_router from './routes/users/post.js';
import user_route from './routes/users/user.js';
import sub_route from './routes/users/subscribe.js';
import contact_route from './routes/users/contact.js';

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use('/uploads/', express.static('uploads/'));

// admins routes
app.use("/admins/categorys",cat_router);
app.use("/admins/posts",post_route);
app.use("/admins/admins",admin_route);

// users routes
app.use("/users/posts",post_router)
app.use("/users/user",user_route)
app.use("/users/sub",sub_route)
app.use("/users/contact",contact_route)

// listen port
app.listen(PORT, () => {
    console.log(`the port is runing... on ${PORT}`)
})