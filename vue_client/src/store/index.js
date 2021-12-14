import Vue from 'vue'
import Vuex from 'vuex'
import admin from './admins/admin'
import adminAuth from './admins/adminAuth'
import category from './admins/category'
import post from './admins/post'
import posts from './users/posts'
import userAuth from './users/userAuth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    admin,
    adminAuth,
    category,
    post,
    posts,
    userAuth
  }
})
