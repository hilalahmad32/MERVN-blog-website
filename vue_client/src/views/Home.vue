<template>
  <div>
    <Header />
    <Hero />
    <Popular />
    <Latest />
    <LoadMore />
    <Footer />
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Hero from '../components/Hero.vue'
import Popular from '../components/Popular.vue'
import Latest from '../components/Latest.vue'
import LoadMore from '../components/LoadMore.vue'
import Footer from '../components/Footer.vue'
export default {
 
  name: 'Home',
  components: {
    Header,
    Hero,
    Popular,
    Latest,
    LoadMore,
    Footer
  }
}
</script>
