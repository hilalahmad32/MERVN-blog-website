<template>
    <div>
        <Header />
        <AdminForm />
        <Footer />
    </div>
</template>
<script>
import AdminForm from '../../../components/admins/admin/AdminForm.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { AdminForm, Header, Footer },
    
}
</script>
<style>
    
</style>