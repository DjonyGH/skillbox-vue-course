<template>
  <div>
    <Header />
    <Component :is="currentPageComponent" :page-params="currentPageParams" />
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header/Header.vue'
import Footer from '@/components/footer/Footer.vue'
import MainPage from '@/pages/MainPage.vue'
import ProductPage from '@/pages/ProductPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import routes from '@/routes/routes.js'
import eventBus from '@/eventBus'
export default {
  name: 'App',
  components: { Header, Footer, MainPage, ProductPage, NotFoundPage },
  data: () => ({
    currentPage: 'main',
    currentPageParams: {},
  }),
  methods: {
    goToPage(pageName, pageParam) {
      this.currentPage = pageName
      this.currentPageParams = pageParam
    },
  },
  computed: {
    currentPageComponent() {
      return routes[this.currentPage] || 'NotFoundPage'
    },
  },
  created() {
    eventBus.$on('goToPage', (pageName, pageParam) => this.goToPage(pageName, pageParam))
  },
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
