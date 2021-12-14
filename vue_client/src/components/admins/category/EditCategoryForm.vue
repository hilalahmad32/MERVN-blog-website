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
            <router-link to="/admins/category"
              ><v-btn class="bg-secondary text-white"
                >Go Back</v-btn
              ></router-link
            >
            <v-card-text><h3>Update Category</h3></v-card-text>
            <v-form @submit="updateCategory">
              <div class="form-group">
                <v-text-field v-model="cat_name" placeholder="Enter Category Name"></v-text-field>
              </div>
              <v-btn type="submit" class="bg-success text-white my-2">Update</v-btn>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import axios from "axios";
import { mapActions } from 'vuex';
export default {
  name: "edit-category",
  data() {
    return {
      id: this.$route.params.id,
      cat_name: "",
    };
  },

  methods: {
    async getEditCategory(_) {
      const config = {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      };
      const response = await axios.patch(
        `http://localhost:8000/admins/categorys/${this.id}`,
        _,
        config
      );
      this.cat_name=response.data.categorys.cat_name
    },
    ...mapActions("category",["sendUpdateCategory"]),
    updateCategory(e){
        e.preventDefault();
        
        const data={
            id:this.id,
            cat_name:this.cat_name,
        }
        this.sendUpdateCategory(data);
    }
  },
  mounted() {
      this.getEditCategory();
  },
};
</script>
<style >
</style>