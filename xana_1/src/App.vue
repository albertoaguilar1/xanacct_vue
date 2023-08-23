<template>
<navi></navi>

  <router-view/>
  <contacto></contacto>
</template>

<script>
// @ is an alias to /src
import navi from '@/components/NavComp.vue'
import contacto from '@/components/ContactoComp.vue'
export default {
  name: 'HomeView',
  components: {
    navi,
    contacto,

  },
}
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #212529;
}


</style>
