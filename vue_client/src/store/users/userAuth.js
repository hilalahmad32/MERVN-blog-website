import axios from 'axios'
import router from '../../router/index'

export default({
    namespaced:true,
    state: {
        token:localStorage.getItem("token") || "",
    },
    getters:{
        token:(state)=>{
            return state.token;
        }
    },
    mutations: {
        setToken(state,token){
            state.token=token;
        }
    },
    actions: {
        async sendRegistration(_,data){
            const response=await axios.post("http://localhost:8000/users/user/signup",data);
            if(response.data.success){
                alert("user add successfully");
                router.push("/signin");
            }else if(response.data.exist){
                alert("email already exist");
            }else{
                alert("Some server problem");
            }
        },
        async sendLogin({commit},data){
            const response=await axios.post("http://localhost:8000/users/user/signin",data);
            if(response.data.success){
                alert("Login successfully");
                localStorage.setItem('token',response.data.token)
                commit("setToken",response.data.token);
                router.push("/");
            }else{
                alert("Invalid Email and password");
            }
        },
        async sendLogout({commit}){
            localStorage.removeItem('token');
            commit("setToken","");
            router.push("/");
        }
    },
  })