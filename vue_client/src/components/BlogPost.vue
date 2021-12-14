<template >
  <div>
    <div
      class="hero_image"
      :style="{
        backgroundImage:
          'url(https://images.unsplash.com/photo-1530789253388-582c481c54b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dHJhdmVsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
      }"
    >
      <h2>Home / blog</h2>
    </div>
    <v-container class="my-5">
      <v-row>
        <v-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          v-for="(post, i) in blog_posts"
          :key="i"
        >
          <v-card>
           <router-link :to="'/post-detail/' + post._id">
                  <img
                    :src="'http://localhost:8000/uploads/' + post.image"
                    style="width: 100%"
                    alt=""
                /></router-link>
            <v-card-title>
              <h4>{{post.title}}</h4>
            </v-card-title>
            <div class="d-flex justify-content-between px-3 align-items-center">
              <h5>views ( 4 )</h5>
               <router-link :to="'/post-detail/' + post._id"><v-btn class="mb-3 bg-success text-white">Read More..</v-btn></router-link>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("posts", ["blog_posts"]),
  },
  methods: {
    ...mapActions("posts", ["getBlogPost"]),
  },
  mounted() {
    this.getBlogPost();
  },
};
</script>
<style >
.hero_image {
  width: 100%;
  height: 70vh;
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>