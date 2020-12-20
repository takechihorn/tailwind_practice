<template>
<div  class ="grid md:grid-cols-3">
  <div class ="md:col-span-1 md:flex md:justify-end">
  <Nav/>

  </div>
  <div class="md:col-span-2">

  <Nuxt/>
  </div>
  <div>
    <Footer/>
  </div>
</div>
</template>

<script>

import Nav from '@/components/Nav.vue'
import axios from 'axios'
export default {
  components: {
    Nav
  }
}
</script>

<style>

</style>
