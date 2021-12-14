<template>
    <div>
          <div class="hero_image" :style="{'backgroundImage':'url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)'}">
      <h2>Home / Contact </h2>
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
            <v-form @submit.prevent="contact">
              <div class="form-group">
                <label for="">Enter Your Name</label>
                <v-text-field type="text" v-model="name"></v-text-field>
              </div>
              <div class="form-group">
                <label for="">Enter Email</label>
                <v-text-field type="email" v-model="email"></v-text-field>
              </div>
              <div class="form-group">
                <label for="">Enter Website (optional)</label>
                <v-text-field type="text" v-model="website"></v-text-field>
              </div>
              <div class="form-group">
                <label for="">Enter Message</label>
              <textarea name="" id="" v-model="message" cols="30" rows="10" class="form-control form-control-lg"></textarea>
              </div>
              <div class="form-group d-flex justify-content-between">
                <v-btn type="submit" class="bg-success text-white">Message</v-btn>
              </div>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    </div>
</template>
<script>
import axios from 'axios';
export default {
    data() {
        return {
            name:"",
            email:"",
            website:"",
            message:"",
        }
    },
    methods: {
        async contact(){
            const data={
                name:this.name,
                email:this.email,
                website:this.website,
                message:this.message,
            };

            const response=await axios.post("http://localhost:8000/users/contact",data);
            if(response.data.success){
                alert("Successfully");
                this.name="";
                this.email="";
                this.website="";
                this.message="";
            }else{
                alert("server problem")
            }
        }
    },
}
</script>
<style>
    
</style>