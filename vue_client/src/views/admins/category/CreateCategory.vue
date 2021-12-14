<template>
    <div>
        <Header />
        <CategoryForm />
        <Footer />
    </div>
</template>
<script>
import CategoryForm from '../../../components/admins/category/CategoryForm.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { CategoryForm, Header, Footer },
    
}
</script>
<style>
    
</style>