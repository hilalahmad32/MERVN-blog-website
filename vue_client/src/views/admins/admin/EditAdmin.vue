<template>
    <div>
        <Header />
        <EditAdminForm />
        <Footer />
    </div>
</template>
<script>
import EditAdminForm from '../../../components/admins/admin/EditAdminForm.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { EditAdminForm, Header, Footer },
    
}
</script>
<style>
    
</style>