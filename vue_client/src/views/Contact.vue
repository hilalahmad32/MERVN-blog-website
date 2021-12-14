<template >
    <div>
        <Header />
        <ContactFrom />
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Header from "../components/Header.vue"
import ContactFrom from '../components/ContactForm.vue'

export default 
 {
     components: { Header, Footer, ContactFrom },
}
</script>
<style >
    
</style>