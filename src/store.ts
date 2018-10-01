import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)
type Cart = {
  [index: number]: number
}
export default new Vuex.Store<any>({
  state: {
    products: [
      {
        name: 'Laptop',
        id: 1,
        vendor: 'HP',
        price: '299900'
      },
      {
        name: 'Mobile',
        id: 2,
        vendor: 'Samsung',
        price: '39990'
      },
      {
        name: 'PC',
        id: 3,
        vendor: 'Asus',
        price: '199900'
      },
      {
        name: 'PS4',
        id: 4,
        vendor: 'Sony',
        price: '34999'
      },
    ],
    wishlist: ([] as Array<number>),
    cart: ({} as Cart)
  },
  mutations: {
    addToWishList(state, productId: number) {
      if (state.wishlist.indexOf(productId) === -1) {
        state.wishlist.push(productId)
      }
    },
    addToCart(state, productId: number) {
      if (typeof state.cart[productId] === 'undefined') {
        state.cart[productId] = 0
      }
      state.cart[productId]++
    }
  },
  getters: {
    isProductInWishList: (state) => (id: number) =>
          (state.wishlist.indexOf(id) !== -1)
  },
  actions: {

  },
  plugins: [
    new VuexPersist().plugin
  ]
})
