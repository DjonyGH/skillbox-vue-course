import Vue from 'vue'
import Vuex from 'vuex'
import products from '../data/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: [{ productId: 1, amount: 2, selectedColor: '#73b6ea', selectedSize: '' }],
  },
  mutations: {
    addProductToCart(state, product) {
      console.log('>', product)
      const item = state.cartProducts.find(
        (item) =>
          item.productId === product.productId &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize,
      )
      console.log('>>>', item)
      if (item) {
        item.amount += product.amount
      } else {
        state.cartProducts.push(product)
      }
    },
    removeProductFromCart(state, product) {
      const item = state.cartProducts.find(
        (item) =>
          item.productId === product.productId &&
          item.selectedColor === product.selectedColor &&
          item.selectedSize === product.selectedSize,
      )
      if (item) {
        item.amount -= product.amount
      }
    },
  },
  getters: {
    cartDetailProducts(state) {
      return state.cartProducts
        .map((item) => ({
          ...item,
          ...products.find((p) => p.id === item.productId),
        }))
        .filter((item) => item.amount > 0)
    },
    totalPrice(state, getters) {
      const price = getters.cartDetailProducts.reduce((acc, item) => {
        return acc + item.price * item.amount
      }, 0)
      return price
    },
  },
})
