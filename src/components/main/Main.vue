<template>
  <main class="content container">
    <div class="content__top content__top--catalog">
      <h1 class="content__title">Каталог</h1>
      <span class="content__info"> 152 товара </span>
    </div>

    <div class="content__catalog">
      <FilterPanel />
      <CatalogList :products="filteredProducts" />
    </div>
  </main>
</template>

<script>
import products from '@/data/products'
import FilterPanel from './filterPanel/FilterPanel.vue'
import CatalogList from './catalogList/CatalogList.vue'
export default {
  name: 'Main',
  components: { FilterPanel, CatalogList },
  data: () => ({
    products,
    filterCategoryId: 0,
    filterPriceFrom: 0,
    filterPriceTo: 0,
  }),
  computed: {
    filteredProducts() {
      let filteredProducts = this.products
      this.filterCategoryId &&
        (filteredProducts = this.products.filter((product) => product.categoryId === this.filterCategoryId))
      this.filterPriceFrom &&
        (filteredProducts = this.products.filter((product) => product.price >= this.filterPriceFrom))
      this.filterPriceTo && (filteredProducts = this.products.filter((product) => product.price <= this.filterPriceTo))
      return filteredProducts
    },
  },
}
</script>

<style></style>
