import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    ]
  },
  mutations: {

  },
  actions: {

  }
})
