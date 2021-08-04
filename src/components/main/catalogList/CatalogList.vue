<template>
  <section class="catalog">
    <ul class="catalog__list">
      <ProductItem v-for="product in products" :key="product.id" :product="product" />
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
import products from '@/data/products'
import ProductItem from './productItem/ProductItem.vue'
import Pagination from './pagination/Pagination.vue'
export default {
  name: 'CatalogList',
  components: { Pagination, ProductItem },
  data: () => ({
    page: 1,
    productsPerPage: 3,
  }),
  computed: {
    products() {
      const offset = (this.page - 1) * this.productsPerPage
      return products.slice(offset, offset + this.productsPerPage)
    },
    countProducts() {
      return products.length
    },
  },
}
</script>

<style></style>
