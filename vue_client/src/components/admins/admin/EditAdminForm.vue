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
            <router-link to="/admins/admin"
              ><v-btn class="bg-secondary text-white"
                >Go Back</v-btn
              ></router-link
            >
            <v-card-text><h3>Update Admin</h3></v-card-text>
            <v-form @submit="updateAdmin">
              <div class="form-group">
                <v-text-field
                  type="text"
                  v-model="fullName"
                  placeholder="Enter Name"
                ></v-text-field>
              </div>
              <div class="form-group">
                <v-text-field
                  type="email"
                  v-model="email"
                  placeholder="Enter Email"
                ></v-text-field>
              </div>
              <div class="form-group">
                <v-text-field
                  type="text"
                  v-model="username"
                  placeholder="Enter Username"
                ></v-text-field>
              </div>
              <div class="form-group">
                <select
                  name="roll"
                  v-model="roll"
                  class="form-control form-control-lg"
                  id="roll"
                >
                  <option disabled selected>Select Option</option>
                  <option value="1">Admin</option>
                  <option value="0">Normal</option>
                </select>
              </div>
              <v-btn type="submit" class="bg-success text-white my-2">{{
                isLoading ? "Updating.." : "Update"
              }}</v-btn>
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
  name: "edit-admins",
  data() {
    return {
      id: "",
      fullName: "",
      email: "",
      roll: "",
      username: "",
    };
  },
  computed: {
    ...mapGetters("admin", ["isLoading"]),
  },
  methods: {
    ...mapActions("admin", ["sendUpdateAdmin"]),
    async editAdmin(_) {
      this.id = this.$route.params.id;
      const config={
        headers:{
          'Authorization':'Bearer '+localStorage.getItem("token")
        }
      }
      const response = await axios.patch(
        `http://localhost:8000/admins/admins/${this.id}`,_,config
      );
      this.fullName = response.data.admins.fullName;
      this.email = response.data.admins.email;
      this.roll = response.data.admins.roll;
      this.username = response.data.admins.username;
    },

    updateAdmin(e) {
      e.preventDefault();

      const data = {
        id: this.id,
        fullName: this.fullName,
        email: this.email,
        username: this.username,
        roll: this.roll,
      };

      this.sendUpdateAdmin(data);
    },
  },
  mounted() {
    this.editAdmin();
  },
};
</script>
<style >
</style>