<template>
    <div>
      <div class="container-fluid bg-white">
          <v-container>
              <div class="d-flex justify-content-between align-items-center">
                  <h1>TechBlog</h1>
                  <div>
 <v-btn class="bg-success text-white">{{ admin.name }}</v-btn>
                  <v-btn class="bg-danger text-white" v-on:click="logout">Logout</v-btn>
                  </div>
                 
              </div>
          </v-container>
      </div>
      <v-container>
          <v-list class="d-flex">
              <v-list-item v-if="admin.roll == 1">
                  <router-link to="/admins/dashboard"><v-btn class="bg-success text-white">Dashboard</v-btn></router-link>
                  <router-link to="/admins/category"> <v-btn style="margin-left:10px;" class="bg-success text-white">Category</v-btn></router-link>
                  <router-link to="/admins/posts"><v-btn id="ml-10" style="margin-left:10px;" class="bg-success text-white">Post</v-btn></router-link>
                  <router-link to="/admins/admin"><v-btn id="ml-10" style="margin-left:10px;" class="bg-success text-white">Admin</v-btn></router-link>
              </v-list-item>
               <v-list-item v-if="admin.roll == 0">
                  <!-- <router-link to="/admins/dashboard"><v-btn class="bg-success text-white">Dashboard</v-btn></router-link>
                  <router-link to="/admins/category"> <v-btn style="margin-left:10px;" class="bg-success text-white">Category</v-btn></router-link> -->
                  <router-link to="/admins/posts"><v-btn id="ml-10" style="margin-left:10px;" class="bg-success text-white">Post</v-btn></router-link>
                  <!-- <router-link to="/admins/admin"><v-btn id="ml-10" style="margin-left:10px;" class="bg-success text-white">Admin</v-btn></router-link> -->
              </v-list-item>

          </v-list>
      </v-container>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {   
    computed:{
        ...mapGetters("adminAuth",["admin"])
    },
    methods: {
        ...mapActions("adminAuth",["getAdmin","sendLogout"]),
        logout(){
            this.sendLogout();
        }
    },
    mounted() {
        this.getAdmin();
    },
}
</script>
<style>
#ml-10{
    margin-left: 10px;
}
</style>