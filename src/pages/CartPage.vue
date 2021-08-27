<template>
  <main class="content container">
    <div class="content__top">
      <ul class="breadcrumbs">
        <li class="breadcrumbs__item">
          <router-link class="breadcrumbs__link" :to="{ name: 'main' }"> Каталог </router-link>
        </li>
        <li class="breadcrumbs__item">
          <a class="breadcrumbs__link"> Корзина </a>
        </li>
      </ul>

      <h1 class="content__title">Корзина</h1>
      <span class="content__info"> {{ $store.getters.cartDetailProducts.length || 'Карзина пуста' }}</span>
    </div>

    <section class="cart">
      <form class="cart__form form" action="#" method="POST">
        <div class="cart__field">
          <ul class="cart__list">
            <li class="cart__item product" v-for="product in $store.getters.cartDetailProducts" :key="product.id">
              <div class="product__pic">
                <img
                  :src="product.imageUrl"
                  :srcset="`${product.imageUrl.split('.')[0]}@2x.${product.imageUrl.split('.')[1]} 2x`"
                  alt="Название товара"
                  width="120"
                  height="120"
                />
              </div>
              <h3 class="product__title">{{ product.title }}</h3>
              <p class="product__info">Объем: <span>128GB</span></p>
              <span class="product__code"> Артикул: {{ product.id }} </span>

              <div class="product__counter form__counter">
                <button type="button" aria-label="Убрать один товар" @click.prevent="removeProduct(product.id)">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" :value="product.amount" name="count" readonly />

                <button type="button" aria-label="Добавить один товар" @click.prevent="addProduct(product.id)">
                  <svg width="10" height="10" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
              </div>

              <b class="product__price"> 18 990 ₽ </b>

              <button class="product__del button-del" type="button" aria-label="Удалить товар из корзины">
                <svg width="20" height="20" fill="currentColor">
                  <use xlink:href="#icon-close"></use>
                </svg>
              </button>
            </li>
          </ul>
        </div>

        <div class="cart__block">
          <p class="cart__desc">Мы&nbsp;посчитаем стоимость доставки на&nbsp;следующем этапе</p>
          <p class="cart__price">Итого: <span>32 970 ₽</span></p>

          <button class="cart__button button button--primery" type="submit">Оформить заказ</button>
        </div>
      </form>
    </section>
  </main>
</template>

<script>
export default {
  name: 'CartPage',
  methods: {
    addProduct(productId) {
      this.$store.commit('addProductToCart', {
        productId: productId,
        amount: 1,
      })
    },
    removeProduct(productId) {
      this.$store.commit('removeProductFromCart', {
        productId: productId,
        amount: 1,
      })
    },
  },
}
</script>

<style></style>
