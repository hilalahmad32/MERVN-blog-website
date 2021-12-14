<template>
    <div>
        <Header />
        <CategoryTable />
        <Footer />
    </div>
</template>
<script>
import CategoryTable from '../../../components/admins/category/CategoryTable.vue'
import Footer from '../../../components/admins/Footer.vue'
import Header from '../../../components/admins/Header.vue'
export default {
  components: { Footer, Header, CategoryTable },
    
}
</script>
<style>
    
</style>