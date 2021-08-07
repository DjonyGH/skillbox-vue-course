<template>
  <section class="catalog">
    <ul class="catalog__list">
      <ProductItem v-for="product in productsList" :key="product.id" :product="product" />
    </ul>

    <Pagination
      v-model="page"
      :prevPage.sync="page"
      :nextPage.sync="page"
      :count="countProducts"
      :per-page="productsPerPage"
    />
  </section>
</template>

<script>
import ProductItem from './productItem/ProductItem.vue'
import Pagination from './pagination/Pagination.vue'
export default {
  name: 'CatalogList',
  components: { Pagination, ProductItem },
  props: ['products'],
  data: () => ({
    page: 1,
    productsPerPage: 3,
  }),
  computed: {
    productsList() {
      const offset = (this.page - 1) * this.productsPerPage
      return this.products.slice(offset, offset + this.productsPerPage)
    },
    countProducts() {
      return this.products.length
    },
  },
}
</script>

<style></style>
