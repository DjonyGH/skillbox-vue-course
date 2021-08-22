import Vue from 'vue'
import Vuex from 'vuex'

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
  },
})
