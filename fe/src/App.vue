<template>
  <main id="app">
    <router-view></router-view>
  </main>
</template>

<script setup>
import axios from 'axios'

// axios
//   .get('/api/test')
//   .then(response => {
//     console.log(response)
//   })
//   .catch(e => console.log(e))
</script>

<style lang="scss" scoped>
#app {
  margin: 0 auto;
  max-width: 375px;
  min-height: 100vh;
}
</style>
