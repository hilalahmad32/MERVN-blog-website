<template>
  <div>
    <v-container>
      <v-row>
        <v-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          v-for="(post, index) in rand_posts"
          :key="index"
        >
          <v-card>
           <router-link :to="'/post-detail/'+post._id">
            <img
              :src="'http://localhost:8000/uploads/'+post.image"
              style="width: 100%"
              alt=""
            /></router-link>

            <v-card-title>
              <h5>{{ post.title }}</h5>
            </v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  name: "hero",
  computed:{
    ...mapGetters('posts',['rand_posts'])
  },
  methods: {
    ...mapActions('posts',["getRandomPost"]),
  },
  mounted() {
    this.getRandomPost();         
  },
};
</script>
<style lang="css">
</style>