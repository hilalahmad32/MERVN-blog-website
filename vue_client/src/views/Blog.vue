<template >
    <div>
        <Header />
        <BlogPost />
        <Footer />
    </div>
</template>
<script>
import BlogPost from '../components/BlogPost.vue'
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
export default {
  components: { Header, Footer, BlogPost },
    
}
</script>
<style>
    
</style>