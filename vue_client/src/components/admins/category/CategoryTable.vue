<template>
  <div>
    <v-container>
      <v-card class="p-4">
        <div class="d-flex justify-content-between">
          <h3>Category ( {{ total }} )</h3>
          <router-link to="/admins/create-category"
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
                <th>Category</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr
                class="border-bottom"
                v-for="(category, i) in categorys"
                :key="i"
              >
                <td>{{ i + 1 }}</td>
                <td>{{ category.cat_name }}</td>
                <td>
                  <router-link :to="'/admins/edit-category/' + category._id"
                    ><v-btn class="text-white bg-primary"
                      >Edit</v-btn
                    ></router-link
                  >
                </td>
                <td>
                  <v-btn
                    v-on:click="deleteCategory(category._id)"
                    class="text-white bg-danger"
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
  name: "category-table",
  data() {
      return {
          total:"",
      }
  },
  computed: {
    ...mapGetters("category", ["categorys"]),
  },
  methods: {
    ...mapActions("category", ["sendGetCategory"]),
    ...mapActions("category", ["sendDeleteCategory"]),
    async totalRecord() {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axios.get(
        "http://localhost:8000/admins/categorys/total",
        config
      );
      this.total = response.data.total;
    },
    deleteCategory(id) {
      this.sendDeleteCategory(id);
      this.sendGetCategory();
      this.totalRecord();
    },
  },
  mounted() {
    this.sendGetCategory();
    this.totalRecord();
  },
};
</script>
<style>
</style>