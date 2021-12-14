<template>
    <div>
        <Header />
        <PostTable />
        <Footer />
    </div>
</template>
<script>
import PostTable from '../../../components/admins/post/PostTable.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { Footer, Header, PostTable },
    
}
</script>
<style>
    
</style>