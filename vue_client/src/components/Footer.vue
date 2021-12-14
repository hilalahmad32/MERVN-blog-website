<template>
  <div>
    <div class="container-fluid bg-dark p-4 text-white">
      <v-container>
        <v-row>
          <v-col xl="4" lg="4" md="4" sm="12">
            <h3>TechBlog</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Deleniti, placeat nesciunt recusandae vero id illum excepturi
              nostrum repudiandae obcaecati in perspiciatis doloribus rem
              consectetur odio. Ipsam nostrum minus deserunt iste.
            </p>
            <v-btn class="bg-success text-white">Read More</v-btn>
          </v-col>
          <v-col xl="4" lg="4" md="4" sm="12">
            <v-list class="bg-dark">
              <v-list-item>
                <router-link class="text-white" to="/">Home</router-link>
              </v-list-item>
              <v-list-item>
                <router-link class="text-white" to="/blog">Blog</router-link>
              </v-list-item>
              <v-list-item> About </v-list-item>
              <v-list-item> Contact </v-list-item>
              <v-list-item>
                <router-link class="text-white" to="/signup">Signup</router-link>
              </v-list-item>
              <v-list-item>
                <router-link class="text-white" to="/signin">Signin</router-link>
              </v-list-item>
            </v-list>
          </v-col>
          <v-col xl="4" lg="4" md="4" sm="12">
            <form action="" @submit.prevent="submit">
              <label for="">Subscribe Here</label>
              <v-text-field
                placeholder="Enter Email"
                class="text-white"
                full-width
                v-model="email"
              ></v-text-field>
              <v-btn type="submit" class="bg-info text-white">Subscribe</v-btn>
            </form>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  data() {
    return {
      email:""
    }
  },
  methods: {
    async submit(){
      const data={
        email:this.email
      }
      const response=await axios.post("http://localhost:8000/users/sub",data);
      if(response.data.success){
        alert("Subscribe Successfully");
        this.email="";
      }else if(response.data.exist){
        alert("Email already exist")
      }else{
        alert("some problem");
      }
    }
  },
};
</script>
<style >
input {
  color: white;
}
input::placeholder {
  color: white;
}

</style>