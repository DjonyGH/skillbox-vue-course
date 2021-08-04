<template>
  <section class="catalog">
    <ul class="catalog__list">
      <li class="catalog__item" v-for="product in products" :key="product.id">
        <a class="catalog__pic" href="#">
          <img
            :src="product.imageUrl"
            :srcset="`${product.imageUrl.split('.')[0]}@2x.${product.imageUrl.split('.')[1]} 2x`"
            alt="Название товара"
          />
        </a>

        <h3 class="catalog__title">
          <a href="#"> {{ product.title }} </a>
        </h3>

        <span class="catalog__price"> {{ product.price }} ₽ </span>

        <ul class="colors colors--black" v-if="product.colors.length">
          <li class="colors__item" v-for="(color, index) in product.colors" :key="index">
            <label class="colors__label">
              <input class="colors__radio sr-only" type="radio" name="color-1" :value="`#${color}`" checked="" />
              <span class="colors__value" :style="`background-color: #${color}`"> </span>
            </label>
          </li>
        </ul>
        <ul class="sizes" v-if="product.sizes.length">
          <li class="sizes__item" v-for="size in product.sizes" :key="size">
            <label class="sizes__label">
              <input class="sizes__radio sr-only" type="radio" name="sizes-1" :value="size" />
              <span class="sizes__value">
                {{ size }}
              </span>
            </label>
          </li>
        </ul>
      </li>
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
import Pagination from '../pagination/Pagination.vue'
export default {
  name: 'CatalogList',
  components: { Pagination },
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
