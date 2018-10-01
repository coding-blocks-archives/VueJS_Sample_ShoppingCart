<template>
  <div class="col-3">
    <b-card :title="product.name">
      <p>{{product.vendor}}</p>
      <p>₹{{product.price}}.00</p>
      <div class="ml-auto">
        <button class="btn btn-success m-1">+</button>
        <button class="btn btn-warning btn-sm m-1">Wishlist</button>
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

}

</script>

