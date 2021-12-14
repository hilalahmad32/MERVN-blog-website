<template >
    <div>
        <v-container class="my-5">
            <v-row>
                <v-col xl="4" lg="4" md="6" sm="12">
                    <v-card class="d-flex justify-content-between px-3 py-3 bg-success text-white">
                        <h1>Total Posts</h1>
                        <h4>5 <br>
                        <router-link to="/posts" class="text-white">view more</router-link></h4> 
                    </v-card>
                </v-col>
                <v-col xl="4" lg="4" md="6" sm="12">
                    <v-card class="d-flex justify-content-between px-3 py-3 bg-info text-white">
                        <h1>Total Category</h1>
                        <h4>5 <br>
                        <router-link to="/posts" class="text-white">view more</router-link></h4> 
                    </v-card>
                </v-col>
                <v-col xl="4" lg="4" md="6" sm="12">
                    <v-card class="d-flex justify-content-between px-3 py-3 bg-secondary text-white">
                        <h1>Total Admins</h1>
                        <h4>5 <br>
                        <router-link to="/posts" class="text-white">view more</router-link></h4> 
                    </v-card>
                </v-col>

                 <v-col xl="4" lg="4" md="6" sm="12">
                    <v-card class="d-flex justify-content-between px-3 py-3 bg-warning text-white">
                        <h1>Total Normal Admins</h1>
                        <h4>5 <br>
                        <router-link to="/posts" class="text-white">view more</router-link></h4> 
                    </v-card>
                </v-col>
                 <v-col xl="4" lg="4" md="6" sm="12">
                    <v-card class="d-flex justify-content-between px-3 py-3 text-white" id="bg-color">
                        <h1>Total Comments</h1>
                        <h4>5 <br>
                        <router-link to="/posts" class="text-white">view more</router-link></h4> 
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
export default {
   
}
</script>
<style >
#bg-color{
    background-color: magenta;
}
</style>