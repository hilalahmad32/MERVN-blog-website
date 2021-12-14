<template >
  <div>
    <v-container>
      <v-card class="p-4">
        <div class="d-flex justify-content-between">
          <h3>Posts ( {{ total }} )</h3>
          <router-link to="/admins/create-posts"
            ><v-btn class="bg-success text-white">Create</v-btn></router-link
          >
        </div>
      </v-card>
      <v-card class="my-5" dark>
        <div class="table-responsive">
          <v-simple-table>
            <thead>
              <tr>
                <th>Id</th>
                <th>Title</th>
                <th>Category</th>
                <th>Roll</th>
                <th>Admin Name</th>
                <th>Image</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(post, i) in posts" :key="i">
                <td>{{ i + 1 }}</td>
                <td>{{ post.title }}</td>
                <td>{{ post.category.cat_name }}</td>
                <td>{{ post.admin.roll == 1 ? "Admin" : "Normal" }}</td>
                <td>{{ post.admin.username }}</td>
                <td>
                  <img
                    :src="'http://localhost:8000/uploads/' + post.image"
                    :style="{ width: '70px', height: '70px' }"
                    alt=""
                  />
                </td>
                <td>
                  <router-link :to="'/admins/edit-posts/' + post._id"
                    ><v-btn class="bg-success text-white"
                      >Edit</v-btn
                    ></router-link
                  >
                </td>
                <td>
                  <v-btn
                    v-on:click="deletePost(post._id)"
                    class="bg-danger text-white"
                    >Delete</v-btn
                  >
                </td>
              </tr>
            </tbody>
          </v-simple-table>
        </div>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import axios from 'axios';
import { mapActions, mapGetters } from "vuex";
export default {
  name: "post-table",
  data() {
      return {
          total:"",
      }
  },
  computed: {
    ...mapGetters("post", ["posts"]),
  },
  methods: {
    ...mapActions("post", ["sendGetPost"]),
    ...mapActions("post", ["sendDeletePost"]),
    async totalRecord() {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axios.get(
        "http://localhost:8000/admins/posts/total",
        config
      );
      this.total = response.data.total;
    },
    deletePost(id) {
      this.sendDeletePost(id);
      this.sendGetPost();
      this.totalRecord();
    },
  },
  mounted() {
    this.sendGetPost();
    this.totalRecord();
  },
};
</script>
<style>
</style>