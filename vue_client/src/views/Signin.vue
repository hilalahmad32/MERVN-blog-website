<template >
    <div>
        <Header />
        <SignInForm />
        <Footer />
    </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Header from "../components/Header.vue"
import SignInForm from '../components/SignInForm.vue'

export default 
 {
     components: { Header, Footer, SignInForm },
}
</script>
<style >
    
</style>