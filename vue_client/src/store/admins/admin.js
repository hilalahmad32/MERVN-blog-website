import axios from 'axios'
import router from '../../router/index'
export default({
  namespaced:true,
  state: {
    admins:[],
    isLoading:false,
  },
  getters:{
    isLoading:(state)=>{
      return state.isLoading;
    },
    admins:(state)=>{
      return state.admins;
    }
  },
  mutations: {
    setLoading(state,isLoading){
      state.isLoading=isLoading;
    },
    setAdmin(state,admins){
      state.admins=admins;
    }
  },
  actions: {
    async sendAddAdmin({commit},data){
      commit("setLoading",true);
      const config={
        headers:{
          'Authorization':'Bearer '+localStorage.getItem("token")
        }
      }
      const response=await axios.post(`http://localhost:8000/admins/admins/`,data,config);
      if(response.data.success){
        alert("Admin add Successfully");
        router.push("/admins/admin")
        commit("setLoading",false)
        data.name="";
        data.email="";
        data.roll="";
        data.password="";
      }else if(response.data.exist){
        alert("Email all ready exist")
        commit("setLoading",false)
      }else{
        alert("Some problem")
        commit("setLoading",false)
      }
    },

    async sendGetAdmin({commit}){
      const config={
        headers:{
          'Authorization':'Bearer '+localStorage.getItem("token")
        }
      }
      const response=await axios.get(`http://localhost:8000/admins/admins/`,config)
      commit("setAdmin",response.data.admins);
    },

    async sendUpdateAdmin({commit},data){
      const id=data.id;
      
      commit("setLoading",true);  
      const config={
        headers:{
          'Authorization':'Bearer '+localStorage.getItem("token")
        }
      }
      const response=await axios.put(`http://localhost:8000/admins/admins/${id}`,data,config);
      if(response.data.success){
        alert("Admin Update Successfully");
        router.push("/admins/admin")
        commit("setLoading",false)
        data.name="";
        data.email="";
        data.roll="";
        data.password="";
      }else{
        alert("Some problem")
        commit("setLoading",false)
      }
    },

    async sendDeleteAdmin(_,id){
      const config={
        headers:{
          'Authorization':'Bearer '+localStorage.getItem("token")
        }
      }
      const response=await axios.delete(`http://localhost:8000/admins/admins/${id}`,config)
      if(response.data.success){
        alert("Admin Delete Successfully");
      }else{
        alert("Some problem")
      }
    },
  },
})
