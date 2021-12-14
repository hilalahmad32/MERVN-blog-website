import axios from "axios";
import router from "../../router";

export default({
    namespaced:true,
    state: {
        posts:[],
    },
    getters:{
        posts:(state)=>{
            return state.posts;
        }
    },
    mutations: {
        setPosts(state,posts){
            state.posts=posts
        }
    },
    actions: {

        async sendAddPost(_,data){
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const response=await axios.post("http://localhost:8000/admins/posts",data,config);
            if(response.data.success){
                alert("Post Add Successfully");
                data.title="";
                data.description="";
                data.category="";
                router.push("/admins/posts");
            }else{
                alert("Something Problem")
            }
        },

        async sendGetPost({commit}){
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const response=await axios.get("http://localhost:8000/admins/posts",config);
            commit("setPosts",response.data.posts);
        },

        async sendUpdatePost(_,data){
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const response=await axios.put(`http://localhost:8000/admins/posts`,data,config);
            if(response.data.success){
                alert("Post Update Successfully");
                data.title="";
                data.description="";
                data.category="";
                router.push("/admins/posts");
            }else{
                alert("Something Problem")
            }
        },

        async sendDeletePost(_,id){
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const response=await axios.delete(`http://localhost:8000/admins/posts/${id}`,config);
            if(response.data.success){
                alert("Post Delete Successfully");
            }else{
                alert("Something Problem")
            }
        },
    },
  })