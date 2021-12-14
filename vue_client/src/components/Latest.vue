<template>
  <div>
    <v-container class="my-5">
      <h1>Latest Posts</h1>
      <v-row>
        <v-col
          xl="4"
          lg="4"
          md="6"
          sm="12"
          xs="12"
          v-for="(post, i) in latest_posts"
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
              <h4>{{ post.title }}</h4>
            </v-card-title>
            <div class="d-flex justify-content-between px-3 align-items-center">
              <h5>views ( 4 )</h5>
              <router-link :to="'/post-detail/' + post._id"
                ><v-btn class="mb-3 bg-success text-white"
                  >Read More..</v-btn
                ></router-link
              >
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
    ...mapGetters("posts", ["latest_posts"]),
  },
  methods: {
    ...mapActions("posts", ["getLatestPost"]),
  },
  mounted() {
    this.getLatestPost();
  },
};
</script>
<style >
</style>