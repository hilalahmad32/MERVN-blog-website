<template >
    <div>
        <Header />
        <SignUpFrom />
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Header from "../components/Header.vue"
import SignUpFrom from '../components/SignUpFrom.vue'

export default 
 {
     components: { Header, Footer, SignUpFrom },
}
</script>
<style >
    
</style>