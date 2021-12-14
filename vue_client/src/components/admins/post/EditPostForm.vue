<template>
  <div>
    <v-container class="my-5">
      <v-row>
        <v-col
          xl="6"
          lg="6"
          md="8"
          sm="12"
          class="offset-xl-3 offset-lg-3 offset-md-2 offset-sm-0"
        >
          <v-card class="p-4">
            <router-link to="/admins/posts"
              ><v-btn class="bg-secondary text-white"
                >Go Back</v-btn
              ></router-link
            >
            <v-card-text><h3>Update Post</h3></v-card-text>
            <v-form @submit="updatePost">
              <div class="form-group">
                <v-text-field
                  type="text"
                  v-model="title"
                  placeholder="Enter title"
                ></v-text-field>
              </div>
              <div class="form-group">
                <select
                  name="cat_id"
                  v-model="category"
                  class="form-control-lg form-control"
                >
                  <option
                    v-for="(cat, i) in categorys"
                    :key="i"
                    :value="cat._id"
                  >
                    {{ cat.cat_name }}
                  </option>
                </select>
              </div>
              <div class="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  v-model="description"
                  rows="10"
                  class="form-control form-control-lg my-2"
                  placeholder="Enter the description"
                ></textarea>
              </div>
              <div class="form-group">
                <input
                  type="file"
                  @change="ChangeFile"
                  name=""
                  class="form-control form-control-lg"
                  placeholder="Enter the description"
                />
                <img
                  :src="'http://localhost:8000/uploads/' + image"
                  :style="{ width: '70px', height: '70px' }"
                  alt=""
                />
                <v-text-field
                  type="text"
                  v-model="old_image"
                  placeholder="Enter title"
                ></v-text-field>
              </div>
              <v-btn type="submit" class="bg-success text-white my-2"
                >Update</v-btn
              >
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "edit-posts",
  data() {
    return {
      id: this.$route.params.id,
      title: "",
      category: "",
      image: "",
      old_image: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters("category", ["categorys"]),
  },
  methods: {
    ...mapActions("category", ["sendGetCategory"]),
    ...mapActions("post", ["sendUpdatePost"]),
    async GetEditPost(_) {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axios.patch(
        `http://localhost:8000/admins/posts/${this.id}`,
        _,
        config
      );
      this.title = response.data.posts.title;
      this.category = response.data.posts.category._id;
      this.image = response.data.posts.image;
      this.old_image = response.data.posts.image;
      this.description = response.data.posts.content;
    },
    ChangeFile(e) {
      this.image = e.target.files[0];
    },
    updatePost(e) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("id", this.id);
      formData.append("title", this.title);
      formData.append("category", this.category);
      formData.append("content", this.description);
      formData.append("old_image", this.old_image);
      formData.append("image", this.image);
      this.sendUpdatePost(formData);
    },
  },
  mounted() {
    this.sendGetCategory();
    this.GetEditPost();
  },
};
</script>
<style >
</style>