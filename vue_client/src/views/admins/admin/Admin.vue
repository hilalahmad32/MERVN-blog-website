<template>
    <div>
        <Header />
        <AdminTable />
        <Footer />
    </div>
</template>
<script>
import AdminTable from '../../../components/admins/admin/AdminTable.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { Footer, Header, AdminTable },
    
}
</script>
<style>
    
</style>