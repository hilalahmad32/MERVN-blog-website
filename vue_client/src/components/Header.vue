<template>
  <div>
    <div class="container-fluid bg-white">
      <v-container>
        <div class="d-flex justify-content-between align-items-center">
          <div class="left-side">
            <h3 id="logo"><router-link to="/">TechBlog</router-link></h3>
          </div>
          <div class="right-side">
            <v-list class="d-flex">
              <v-list-item>
                <router-link to="/">Home</router-link>
              </v-list-item>
              <v-list-item>
                <router-link to="/blog">Blog</router-link>
              </v-list-item>
              <v-list-item> About </v-list-item>
              <v-list-item > <router-link to="/contact">Contact</router-link> </v-list-item>
              <span v-if="!token" class="d-flex">
                <v-list-item>
                  <router-link to="/signup">Signup</router-link>
                </v-list-item>
                <v-list-item>
                  <router-link to="/signin">Signin</router-link>
                </v-list-item>
              </span>
              <span v-else>
                <v-btn v-on:click="logout" class="bg-danger text-white">Logout</v-btn>
              </span>
            </v-list>
          </div>
        </div>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "header",
  computed: {
    ...mapGetters("userAuth", ["token"]),
  },
  methods: {
    ...mapActions('userAuth',['sendLogout']),
    logout(){
      this.sendLogout();
    }
  },
};
</script>
<style >
a {
  text-decoration: none;
  color: black;
}
</style>