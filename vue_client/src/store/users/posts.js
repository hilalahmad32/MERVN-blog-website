import axios from "axios";

export default({
    namespaced:true,
    state: {
        rand_posts:[],
        popular_posts:[],
        latest_posts:[],
        blog_posts:[],
    },
    getters:{
        rand_posts:(state)=>{
            return state.rand_posts;
        },
        popular_posts:(state)=>{
            return state.popular_posts;
        },
        latest_posts:(state)=>{
            return state.latest_posts;
        },
        blog_posts:(state)=>{
            return state.blog_posts;
        },
    },
    mutations: {
        setPost(state,rand_posts){
            state.rand_posts=rand_posts;
        },
        setPopularPost(state,popular_posts){
            state.popular_posts=popular_posts;
        },
        setLatestPost(state,latest_posts){
            state.latest_posts=latest_posts;
        },
        setBlogPost(state,blog_posts){
            state.blog_posts=blog_posts;
        },
    },
    actions: {

        async getPopularPost({commit}){
            const response=await axios.get("http://localhost:8000/users/posts/random_post");
           commit("setPost",response.data.posts);  
        },
        async getRandomPost({commit}){
            const response=await axios.get("http://localhost:8000/users/posts/popular_post");
           commit("setPopularPost",response.data.posts);  
        },
        async getLatestPost({commit}){
            const response=await axios.get("http://localhost:8000/users/posts/latestPosts");
           commit("setLatestPost",response.data.posts);  
        },

        async getBlogPost({commit}){
            const response=await axios.get("http://localhost:8000/users/posts/allPosts");
           commit("setBlogPost",response.data.posts);  
        }
    },
  })