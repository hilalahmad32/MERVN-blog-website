<template>
  <div>
    <div
      class="hero_image"
      :style="{
        backgroundImage:
          `url(http://localhost:8000/uploads/${image})`,
      }"
    >
      <h2>Home / {{ title }}</h2>
    </div>
    <v-container class="my-5">
        <v-row>
            <v-col lg="8" md="6" sm="12">
                <h1>{{ title }}</h1>
                <img :src="'http://localhost:8000/uploads/'+image" alt="" :style="{width:'100%'}">
                <p>
                    {{ content }}
                </p>
            </v-col>
            <v-col lg="4" md="6" sm="12">
                <v-card class="my-5" >
                   <v-card-title  v-for="(category,i) in categorys" :key="i"><router-link :to="'/category-post/' + category._id">{{category.cat_name}} </router-link> </v-card-title>
                    <hr> 
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
            id:this.$route.params.id,
            title:"",
            content:"",
            image:"",
            categorys:[],
        }
    },
    methods: {
        async getPostDetail(){
            const response=await axios.get(`http://localhost:8000/users/posts/${this.id}`);
            this.title=response.data.posts[0].title;
            this.content=response.data.posts[0].content;
            this.image=response.data.posts[0].image;
        },

        async GetCategorys(){
            const response=await axios.get(`http://localhost:8000/users/posts/category`);
            this.categorys=response.data.categorys;

        },
       
    },

    mounted() {
        this.getPostDetail();
        this.GetCategorys();
    },
};
</script>
<style>
</style>