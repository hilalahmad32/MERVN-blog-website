<template >
  <div>
    <div id="popular_post" class="my-3">
      <v-container>
        <h1>Popular post</h1>
        <!--  -->
        <v-row class="mt-3">
          <v-col
            xl="4"
            lg="4"
            md="6"
            sm="12"
            xs="12"
            v-for="(post, i) in popular_posts"
            :key="i"
          >
            <v-row>
              <v-col xl="3" lg="3" md="3" sm="3">
                <router-link :to="'/post-detail/' + post._id">
                  <img
                    :src="'http://localhost:8000/uploads/' + post.image"
                    style="width: 100%"
                    alt=""
                /></router-link>
              </v-col>
              <v-col xl="8" lg="8" md="8" sm="8">
                <router-link :to="'/post-detail/' + post._id"> <h5>{{ post.title }}</h5></router-link>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters("posts", ["popular_posts"]),
  },
  methods: {
    ...mapActions("posts", ["getPopularPost"]),
  },
  mounted() {
    this.getPopularPost();
  },
};
</script>
<style >
#popular_post {
  background-color: white;
  padding: 20px;
}
</style>