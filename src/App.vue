<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import NavBar from '@/components/NavBar.vue'

@Component({
  components: { NavBar }
})
export default class App extends Vue {

}
</script>


<style lang="scss">
</style>
