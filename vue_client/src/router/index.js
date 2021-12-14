import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Signup from '../views/Signup.vue'
import Signin from '../views/Signin.vue'
import Dashboard from '../views/admins/Dashboard.vue'
import Category from '../views/admins/category/Category.vue'
import CreateCategory from '../views/admins/category/CreateCategory.vue'
import EditCategory from '../views/admins/category/EditCategory.vue'
import Admin from '../views/admins/admin/Admin.vue'
import CreateAdmin from '../views/admins/admin/CreateAdmin.vue'
import EditAdmin from '../views/admins/admin/EditAdmin.vue'
import AdminLogin from '../views/admins/AdminLogin.vue'
import Post from '../views/admins/post/Post.vue'
import CreatePost from '../views/admins/post/CreatePost.vue'
import EditPost from '../views/admins/post/EditPost.vue'
import Contact from '../views/Contact.vue'
import PostDetail from '../views/PostDetail.vue'
import PostByCategory from '../views/PostByCategory.vue'

Vue.use(VueRouter)

const guest=(to, from, next) => {
  if(!localStorage.getItem("token")){
    next();
  }else{
    next("/admins")
  }
}
const auth=(to, from, next) => {
  if(localStorage.getItem("token")){
    next();
  }else{
    next("/admins")
  }
}


const userguest=(to, from, next) => {
  if(!localStorage.getItem("token")){
    next();
  }else{
    next("/admins")
  }
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    component: Blog
  },
  {
    path: '/contact',
    name: 'contact',
    component: Contact
  },
  {
    path: '/post-detail/:id',
    name: 'post-detail',
    component: PostDetail,
  },
  {
    path: '/category-post/:id',
    name: 'category-post',
    component: PostByCategory,
  },
  {
    path: '/signup',
    name: 'signup',
    component: Signup,
    beforeEnter:userguest
  },
  {
    path: '/signin',
    name: 'signin',
    component: Signin,
    beforeEnter:userguest

  },

  // admin routes
  {
    path: '/admins',
    name: 'admin-login',
    component: AdminLogin,
    beforeEnter:guest,
  },
  {
    path: '/admins/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter:auth,

  },
  {
    path: '/admins/category',
    name: 'category',
    component: Category,
    beforeEnter:auth,
  },
  {
    path: '/admins/create-category',
    name: 'create-category',
    component: CreateCategory,
    beforeEnter:auth,
  },
  {
    path: '/admins/edit-category/:id',
    name: 'edit-category',
    component: EditCategory,
    beforeEnter:auth,
  },
  {
    path: '/admins/posts',
    name: 'posts',
    component: Post,
    beforeEnter:auth,
  },
  {
    path: '/admins/create-posts',
    name: 'create-posts',
    component: CreatePost,
    beforeEnter:auth,
  },
  {
    path: '/admins/edit-posts/:id',
    name: 'edit-posts',
    component: EditPost,
    beforeEnter:auth,
  },
  {
    path: '/admins/admin',
    name: 'admin',
    component: Admin,
    beforeEnter:auth,
  },
  {
    path: '/admins/create-admin',
    name: 'create-admin',
    component: CreateAdmin,
    beforeEnter:auth,
  },
  {
    path: '/admins/edit-admin/:id',
    name: 'edit-admin',
    component: EditAdmin,
    beforeEnter:auth,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
