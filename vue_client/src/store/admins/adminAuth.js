import axios from "axios";
import router from "../../router";

export default ({
    namespaced: true,
    state: {
        isLoading: false,
        token: localStorage.getItem("token") || "",
        admin: [],
    },
    getters: {
        admin: (state) => {
            return state.admin
        },
        token: (state) => {
            return state.token;
        },
        isLoading: (state) => {
            return state.isLoading;
        }
    },
    mutations: {
        setAdmins(state, admin) {
            state.admin = admin;
        },
        setLoading(state, isLoading) {
            state.isLoading = isLoading;
        },
        setToken(state, token) {
            state.token = token;
        }
    },
    actions: {
        async sendLogin({ commit }, data) {
            commit("setLoading", true);
            const response = await axios.post("http://localhost:8000/admins/admins/login", data);
            if (response.data.success) {
                localStorage.setItem("token", response.data.token);
                commit("setToken", response.data.token);
                alert("login successfully");
                commit("setLoading", false);
                data.email = "";
                data.password = "";
                router.push("/admins/dashboard")
            } else {
                alert("invalid email and password")
                commit("setLoading", false);
            }
        },
        async getAdmin({ commit }) {
            const config = {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem("token")
                }
            }
            const response = await axios.get(`http://localhost:8000/admins/admins/admin`, config)
            commit("setAdmins", response.data.admins);
        },

        async sendLogout({commit}){
            localStorage.removeItem("token");
            commit("setToken","");
            alert("logout Successfully");
            router.push("/admins")
        }
    },

})