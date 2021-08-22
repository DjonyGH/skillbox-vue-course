<template>
  <div>
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'

export default {
  name: 'App',
  components: { Header, Footer },
}
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
