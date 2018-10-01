<template>
  <div class="container">
    <div class="row">
      <ProductCard
        v-for="product in products"
        :product="product"
        :key="product.id">
      </ProductCard>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import ProductCard from '@/components/ProductCard.vue'

@Component({
  components: { ProductCard }
})
export default class WishList extends Vue {
  get products() {
    return this.$store.state.products.filter((product: any) => {
      return this.$store.state.wishlist.indexOf(product.id) !== -1
    })
  }
}
</script>

