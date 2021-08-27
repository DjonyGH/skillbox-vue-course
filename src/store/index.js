import Vue from 'vue'
import Vuex from 'vuex'
import products from '../data/products'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartProducts: [{ productId: 1, amount: 2 }],
  },
  mutations: {
    addProductToCart(state, product) {
      const item = state.cartProducts.find((item) => item.productId === product.productId)
      if (item) {
        item.amount += product.amount
      } else {
        state.cartProducts.push(product)
      }
    },
    removeProductFromCart(state, product) {
      const item = state.cartProducts.find((item) => item.productId === product.productId)
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
  },
})
