<template>
    <div>
        <Header />
        <PostForm />
        <Footer />
    </div>
</template>
<script>
import PostForm from '../../../components/admins/post/PostForm.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { Footer, Header,PostForm },
    
}
</script>
<style>
    
</style>