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
export default class Catalog extends Vue {
  get products() {
    return this.$store.state.products
  }
}
</script>

