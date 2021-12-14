<template>
  <div>
       <div class="hero_image" :style="{'backgroundImage':'url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}">
      <h2>Home / Signup </h2>
      </div>
    <v-container>
      <v-row>
        <v-col
          xl="6"
          lg="6"
          md="8"
          sm="12"
          class="offset-xl-3 offset-lg-3 offset-md-2 offset-sm-12"
        >
          <v-card class="p-5">
            <v-form @submit="signup">
              <div class="form-group">
                <label for="">Enter Your Name</label>
                <v-text-field type="text" v-model="name"></v-text-field>
              </div>
              <div class="form-group">
                <label for="">Enter Email</label>
                <v-text-field type="email" v-model="email"></v-text-field>
              </div>
              <div class="form-group">
                <label for="">Enter Password</label>
                <v-text-field type="password" v-model="password"></v-text-field>
              </div>
              <div class="form-group d-flex justify-content-between">
                <v-btn type="submit" class="bg-success text-white">Signup</v-btn>
                <router-link to="/signin">already account Login</router-link>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions } from 'vuex';
export default {
  data() {
    return {
      name:"",
      email:"",
      password:"",
    }
  },

  methods: {
    ...mapActions('userAuth',["sendRegistration"]),
    signup(e){
      e.preventDefault();
      const data={
        name:this.name,
        email:this.email,
        password:this.password,
      };
      this.sendRegistration(data);
    }
  },
};
</script>
<style >
.hero_image{
    width: 100%;
    height: 70vh;
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>