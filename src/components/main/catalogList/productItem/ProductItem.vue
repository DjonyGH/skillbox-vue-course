<template>
  <li class="catalog__item">
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
          <input class="colors__radio sr-only" type="radio" :value="`#${color}`" v-model="selectedColor" />
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
</template>

<script>
export default {
  name: 'ProductItem',
  props: ['product'],
  data() {
    return {
      selectedColor: `#${this.product.colors[0]}`,
    }
  },
}
</script>

<style></style>
