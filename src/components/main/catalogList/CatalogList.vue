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

    <ul class="catalog__pagination pagination">
      <li class="pagination__item">
        <a class="pagination__link pagination__link--arrow pagination__link--disabled" aria-label="Предыдущая страница">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-left"></use>
          </svg>
        </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link pagination__link--current"> 1 </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link" href="#"> 2 </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link" href="#"> 3 </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link" href="#"> 4 </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link" href="#"> ... </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link" href="#"> 10 </a>
      </li>
      <li class="pagination__item">
        <a class="pagination__link pagination__link--arrow" href="#" aria-label="Следующая страница">
          <svg width="8" height="14" fill="currentColor">
            <use xlink:href="#icon-arrow-right"></use>
          </svg>
        </a>
      </li>
    </ul>
  </section>
</template>

<script>
import products from '@/data/products'
export default {
  name: 'CatalogList',
  data: () => ({
    products,
  }),
}
</script>

<style></style>
