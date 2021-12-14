<template>
  <div>
    <v-container class="my-5">
      <v-row>
        <v-col
          xl="6"
          lg="6"
          md="8"
          sm="12"
          class="offset-xl-3 offset-lg-3 offset-md-2  offset-sm-0"
        >
          <v-card class="p-4">
            <router-link to="/admins/admin"
              ><v-btn class="bg-secondary text-white"
                >Go Back</v-btn
              ></router-link
            >
            <v-card-text><h3>Add Admin</h3></v-card-text>
            <v-form @submit="submit">
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
                  type="username"
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
              <div class="form-group">
                <v-text-field
                  type="password"
                  v-model="password"
                  placeholder="Enter Password"
                ></v-text-field>
              </div>
              <v-btn type="submit" class="bg-success text-white my-2"
                >{{isLoading ? "Saving.....":"Save"}}</v-btn
              >
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "create-admin",
  data() {
    return {
      fullName: "",
      email: "",
      username: "",
      roll: "",
      password: "",
    };
  },
  computed:{
      ...mapGetters('admin',['isLoading'])
  },
  methods: {
    ...mapActions("admin", ["sendAddAdmin"]),
    submit(e) {
      e.preventDefault();
      if (!this.fullName || !this.email || !this.username || !this.roll || !this.password) {
        alert("Please fill all field");
      } else {
        const data = {
          fullName: this.fullName,
          email: this.email,
          username: this.username,
          roll: this.roll,
          password: this.password,
        };
      this.sendAddAdmin(data);

      }

    },
  },
};
</script>
<style >
</style>