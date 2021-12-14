<template>
  <div>
      
    <v-container class="mt-5">
      <v-row>
        <v-col
          xl="6"
          lg="6"
          md="8"
          sm="12"
          class="offset-xl-3 offset-lg-3 offset-md-2 offset-sm-12"
        >
              <h1 class="bg-white text-center p-2">Admin Login</h1>

          <v-card class="p-5">
            <v-form @submit="login">
              <div class="form-group">
                <label for="">Enter Email</label>
                <v-text-field  type="email" v-model="email"></v-text-field>
              </div>
              <div class="form-group">
                <label for="">Enter Password</label>
                <v-text-field type="password" v-model="password"></v-text-field>
              </div>
              <div class="form-group d-flex justify-content-between">
                <v-btn type="submit" class="bg-success text-white">Login</v-btn>
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
  name:"admin-login",
  data() {
    return {
      email:"",
      password:"",
    }
  },
  methods: {
    ...mapActions("adminAuth",["sendLogin"]),
    login(e){
      e.preventDefault();
      if(!this.email || !this.password){
        alert("Please fill all the field");
      }else{
        const data={
          email:this.email,
          password:this.password
        };
        this.sendLogin(data);
      }
    }
  },
};
</script>
<style >

</style>