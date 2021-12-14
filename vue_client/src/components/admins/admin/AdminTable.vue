<template>
  <div>
    <v-container>
      <v-card class="p-4">
        <div class="d-flex justify-content-between">
          <h3>Admin ( {{ total }} )</h3>
          <router-link to="/admins/create-admin"
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
                <th>Name</th>
                <th>Email</th>
                <th>Roll</th>
                <th>Username</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-bottom" v-for="(admin, i) in admins" :key="i">
                <td>{{ i + 1 }}</td>
                <td>{{ admin.fullName }}</td>
                <td>{{ admin.email }}</td>
                <td>{{ admin.roll == 1 ? "Admin" : "Normal" }}</td>
                <td>{{ admin.username }}</td>
                <td>
                  <router-link :to="'/admins/edit-admin/' + admin._id"
                    ><v-btn class="text-white bg-primary"
                      >Edit</v-btn
                    ></router-link
                  >
                </td>
                <td>
                  <v-btn
                    v-on:click="deleteAdmin(admin._id)"
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
  name: "admin-table",
  data() {
      return {
          total:"",
      }
  },
  computed: {
    ...mapGetters("admin", ["admins"]),
  },
  methods: {
    ...mapActions("admin", ["sendGetAdmin"]),
    ...mapActions("admin", ["sendDeleteAdmin"]),
    async totalRecord() {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
        const response=await axios.get("http://localhost:8000/admins/admins/total",config);

        this.total=response.data.total;

    },
    deleteAdmin(id) {
      this.sendDeleteAdmin(id);
      this.sendGetAdmin();
      this.totalRecord();
    },
  },
  mounted() {
    this.sendGetAdmin();
    this.totalRecord();
  },
};
</script>
<style>
</style>