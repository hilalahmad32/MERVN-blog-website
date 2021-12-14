<template >
  <div>
    <Header />
    <DashboardContent /> 
    <Footer />
  </div>
</template>
<script>
import Header from "../../components/admins/Header.vue";
import Footer from "../../components/admins/Footer.vue";
import DashboardContent from "../../components/admins/DashboardContent.vue";
export default {
  components: { Header, Footer, DashboardContent },
};
</script>
<style>
</style>