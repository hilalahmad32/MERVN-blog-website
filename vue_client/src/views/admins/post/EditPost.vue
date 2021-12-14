<template>
    <div>
        <Header />
        <EditPostForm />
        <Footer />
    </div>
</template>
<script>
import EditPostForm from '../../../components/admins/post/EditPostForm.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { Footer, Header,EditPostForm },
    
}
</script>
<style>
    
</style>