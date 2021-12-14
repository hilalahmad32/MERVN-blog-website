<template>
    <div>
        <Header />
        <EditCategoryForm />
        <Footer />
    </div>
</template>
<script>
import EditCategoryForm from '../../../components/admins/category/EditCategoryForm.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { EditCategoryForm, Header, Footer },
    
}
</script>
<style>
    
</style>