<template>
    <div>
        <v-container class="my-5">
            <v-row>
                <v-col xl="6" lg="6" md="8" sm="12" class="offset-xl-3 offset-lg-3 offset-md-2 offset-sm-0">
                    <v-card class="p-4">
                        <router-link to="/admins/posts"><v-btn class="bg-secondary text-white">Go Back</v-btn></router-link>
                        <v-card-text><h3>Add Post</h3></v-card-text>
                        <v-form @submit="submitData">
                            <div class="form-group">
                                <v-text-field type="text" v-model="title" placeholder="Enter title"></v-text-field>
                            </div>
                            <div class="form-group">
                              <select name="cat_id" v-model="cat_id"  class="form-control-lg form-control" >
                                  <option  v-for="(category , i) in categorys" :key="i" :value="category._id">{{category.cat_name}}</option>
                              </select>
                            </div>
                            <div class="form-group my-2">
                              <textarea name="" id="" v-model="description" cols="30" rows="10" class="form-control form-control-lg" placeholder="Enter the description"></textarea>
                            </div>
                             <div class="form-group my-2">
                              <input type="file" name="" @change="ChangeFile" class="form-control form-control-lg" placeholder="Enter the description" />
                            </div>
                            <v-btn type="submit" class="bg-success text-white my-2">Save</v-btn>
                        </v-form>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
export default {
    name:'create-posts',
    data() {
        return {
            title:"",
            cat_id:"",
            // admin:"",
            description:"",
            image:"",
        }
    },
    computed:{
        ...mapGetters("category",["categorys"]),
        ...mapGetters("adminAuth",["admin"]),
    },
    methods: {
        ...mapActions("category",["sendGetCategory"]),
        ...mapActions("post",["sendAddPost"]),
        ...mapActions("adminAuth",["getAdmin"]),
        ChangeFile(e){
            this.image=e.target.files[0];
        },

        submitData(e){
            e.preventDefault();
            
            const formData=new FormData();
            formData.append("title",this.title);
            formData.append("category",this.cat_id);
            formData.append("admin",this.admin.user_id);
            formData.append("content",this.description);
            formData.append("image",this.image);
            this.sendAddPost(formData);
        }
    },

    mounted() {
        this.sendGetCategory();
        this.getAdmin();
    },
}
</script>
<style >
    
</style>