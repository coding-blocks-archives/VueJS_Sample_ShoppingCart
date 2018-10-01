<template>
  <div class="col-3">
    <b-card :title="product.name">
      <p>{{product.vendor}}</p>
      <p>₹{{product.price}}.00</p>
      <div class="ml-auto">
        <button @click="addToCart(product.id)" class="btn btn-success m-1">
          +
        </button>
        <button
          @click="addToWishList(product.id)"
          :disabled="isInWishList"
          class="btn btn-warning btn-sm m-1">
          Wishlist
        </button>
      </div>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'

@Component({
  props: [ 'product' ]
})
export default class ProductCard extends Vue {
  product!: any
  isInWishList = this.$store.getters.isProductInWishList(this.product.id)
  addToCart(id: number) {
    this.$store.commit('addToCart', id)
  }
  addToWishList(id: number) {
    this.$store.commit('addToWishList', id)
    this.isInWishList = this.$store.getters.isProductInWishList(this.product.id)

  }
}

</script>

