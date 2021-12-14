<template>
    <div>
        <v-container class="my-5">
            <v-row>
                <v-col xl="6" lg="6" md="8" sm="12" class="offset-xl-3 offset-lg-3 offset-md-2 offset-sm-0">
                    <v-card class="p-4">
                        <router-link to="/admins/category"><v-btn class="bg-secondary text-white">Go Back</v-btn></router-link>
                        <v-card-text><h3>Insert Category</h3></v-card-text>
                        <v-form @submit="addCategorys">
                            <div class="form-group">
                                <v-text-field v-model="category_name" placeholder="Enter Category Name"></v-text-field>
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
import { mapActions } from 'vuex'
export default {
    name:"category-form",
    data() {
        return {
            category_name:"",
        }
    },
    methods: {
        ...mapActions("category",["sendAddCategory"]),
        addCategorys(e){
            e.preventDefault();
            
            const data={
                cat_name:this.category_name,
            }
            this.sendAddCategory(data);
        }
    },
}
</script>
<style >
    
</style>