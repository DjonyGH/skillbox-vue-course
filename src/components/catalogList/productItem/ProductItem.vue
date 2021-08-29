<template>
  <li class="catalog__item">
    <router-link class="catalog__pic" :to="{ name: 'product', params: { id: product.id } }">
      <img
        :src="product.imageUrl"
        :srcset="`${product.imageUrl.split('.')[0]}@2x.${product.imageUrl.split('.')[1]} 2x`"
        alt="Название товара"
      />
    </router-link>

    <h3 class="catalog__title">
      <a href="#"> {{ product.title }} </a>
    </h3>

    <span class="catalog__price"> {{ product.price | numberFormat }} ₽ </span>

    <ul class="colors colors--black" v-if="product.colors.length">
      <li class="colors__item" v-for="(color, index) in product.colors" :key="index">
        <label class="colors__label">
          <input class="colors__radio sr-only" type="radio" v-model="selectedColor" />
          <span class="colors__value" :style="`background-color: ${color}`"> </span>
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
</template>

<script>
import goToPage from '@/helpers/goToPage'
import numberFormat from '@/helpers/numberFormat'
export default {
  name: 'ProductItem',
  props: ['product'],
  data() {
    return {
      selectedColor: `${this.product.colors[0]}`,
    }
  },
  methods: {
    goToPage,
  },
  filters: {
    numberFormat,
  },
}
</script>

<style></style>
