import axios from "axios"
import router from "../../router";

export default({
    namespaced:true,
    state: {
        categorys:[],
    },
    getters:{
        categorys:(state)=>{
            return state.categorys;
        }
    },
    mutations: {
        setCategory(state,categorys){
            state.categorys=categorys;
        }
    },
    actions: {
        async sendGetCategory({commit}){
            const config={
                headers:{
                  'Authorization':'Bearer '+localStorage.getItem("token")
                }
              }
            const response=await axios.get("http://localhost:8000/admins/categorys",config);
           commit("setCategory",response.data.categorys)
        },

        async sendUpdateCategory(_,data){
            const id=data.id;
            const config={
                headers:{
                  'Authorization':'Bearer '+localStorage.getItem("token")
                }
              }
            const response=await axios.put(`http://localhost:8000/admins/categorys/${id}`,data,config);
            if(response.data.success){
                alert("Category Update Successfully");
                router.push("/admins/category");
            }else{
                alert("Some problem");
            }
        },

        async sendDeleteCategory(_,id){
            const config={
                headers:{
                  'Authorization':'Bearer '+localStorage.getItem("token")
                }
              }
              const response=await axios.delete(`http://localhost:8000/admins/categorys/${id}`,config);
              if(response.data.success){
                  alert("Category Delete successfully");
              }else{
                  alert("some problem");
              }
        },

        async sendAddCategory(_,data){
            const config={
                headers:{
                  'Authorization':'Bearer '+localStorage.getItem("token")
                }
              }
            const response=await axios.post(`http://localhost:8000/admins/categorys`,data,config);
            if(response.data.success){
                alert("Category Add Successfully");
                router.push("/admins/category");
            }else{
                alert("Some problem");
            }
        },

    },
  
  })